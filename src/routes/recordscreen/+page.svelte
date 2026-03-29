<script lang="ts">
	import { onMount, tick } from 'svelte';
	import RecordRTC from 'recordrtc';
	// @ts-ignore
	import DetectRTC from 'detectrtc';
	// @ts-ignore
	import MultiStreamsMixer from 'multistreamsmixer';
	import Navbar from '$lib/Navbar.svelte';

	let state = 'options'; // 'options', 'starting', 'recording', 'playback'
	let selectedMode = ''; // 'screen', 'screen+cam'

	let liveVideo: HTMLVideoElement;
	let playbackVideo: HTMLVideoElement;

	let screenStream: MediaStream | null = null;
	let cameraStream: MediaStream | null = null;
	let mixer: any = null;
	let recorder: any = null;
	let recordedBlob: Blob | null = null;
	let recordedUrl: string | null = null;
	let hasError = false;
	let errorMessage = '';

	async function startRecordingSequence(mode: string) {
		selectedMode = mode;
		state = 'starting';
		hasError = false;
		errorMessage = '';
		try {
			if (!DetectRTC.isScreenCapturingSupported) {
				throw new Error(
					'Screen capturing is not supported on your browser. Please use Chrome/Firefox/Edge on Desktop.'
				);
			}

			// Capture Screen
			screenStream = await navigator.mediaDevices.getDisplayMedia({
				video: true,
				audio: true // Attempt to capture system audio if selected by user
			});

			let finalStream: MediaStream = screenStream;

			if (mode === 'screen+cam') {
				// Capture Camera
				try {
					cameraStream = await navigator.mediaDevices.getUserMedia({
						video: { width: { ideal: 640 }, height: { ideal: 480 } },
						audio: true // Microphone
					});
				} catch (camErr) {
					console.warn(
						'Camera/Mic permission denied or not available. Falling back to screen only.'
					);
					// Proceed without camera if denied/failed, but maybe user expects it to fail
					throw new Error('Camera or Microphone access was denied or device not found.');
				}

				// Configure streams for MultiStreamsMixer
				const sStreamAny = screenStream as any;
				sStreamAny.width = window.screen.width;
				sStreamAny.height = window.screen.height;
				sStreamAny.fullcanvas = true;

				const cStreamAny = cameraStream as any;
				cStreamAny.width = Math.floor(sStreamAny.width * 0.2); // 20% of screen width
				cStreamAny.height = Math.floor(sStreamAny.height * 0.2); // 20% of screen height
				cStreamAny.top = sStreamAny.height - cStreamAny.height - 20; // Bottom right with 20px padding
				cStreamAny.left = sStreamAny.width - cStreamAny.width - 20;

				// Mix them
				mixer = new MultiStreamsMixer([screenStream, cameraStream]);
				mixer.frameInterval = 1;
				mixer.startDrawingFrames();
				finalStream = mixer.getMixedStream();
			}

			state = 'recording';
			await tick(); // Wait for DOM to show the liveVideo element

			if (liveVideo) {
				liveVideo.srcObject = finalStream;
				liveVideo.play().catch((e) => console.error('Video play error:', e));
			}

			// Setup RecordRTC
			recorder = new RecordRTC(finalStream, {
				type: 'video',
				mimeType: 'video/webm'
			});
			recorder.startRecording();
		} catch (err: any) {
			hasError = true;
			errorMessage = err.message || 'Unknown error occurred while acquiring media.';
			state = 'options';
			cleanupStreams();
		}
	}

	function stopRecording() {
		if (recorder) {
			recorder.stopRecording(() => {
				recordedBlob = recorder.getBlob();
				finalizeRecording();
			});
		}
	}

	async function finalizeRecording() {
		state = 'playback';
		await tick();

		cleanupStreams();

		if (recordedBlob) {
			recordedUrl = URL.createObjectURL(recordedBlob);
			if (playbackVideo) {
				playbackVideo.src = recordedUrl;
			}
		}
	}

	let downloadFormat = 'mkv';

	function downloadVideo() {
		if (!recordedUrl) return;
		const a = document.createElement('a');
		a.style.display = 'none';
		a.href = recordedUrl;
		a.download = `recording-${Date.now()}.${downloadFormat}`;
		document.body.appendChild(a);
		a.click();
		setTimeout(() => {
			document.body.removeChild(a);
		}, 100);
	}

	function recordAnother() {
		if (recordedUrl) {
			URL.revokeObjectURL(recordedUrl);
			recordedUrl = null;
		}
		recordedBlob = null;
		state = 'options';
	}

	function cleanupStreams() {
		if (recorder) {
			recorder.destroy();
			recorder = null;
		}
		if (mixer) {
			mixer.releaseStreams();
			mixer = null;
		}
		if (screenStream) {
			screenStream.getTracks().forEach((t) => t.stop());
			screenStream = null;
		}
		if (cameraStream) {
			cameraStream.getTracks().forEach((t) => t.stop());
			cameraStream = null;
		}
		if (liveVideo) {
			liveVideo.srcObject = null;
		}
	}

	onMount(() => {
		// Initialize or check compat here if needed
		console.log('DetectRTC IS_WEBRTC_SUPPORTED:', DetectRTC.isWebRTCSupported);
	});
</script>

<Navbar />

<div class="container d-flex flex-column align-items-center justify-content-center min-vh-100 py-5">
	<div class="row w-100 justify-content-center">
		<div class="col-12 col-md-10 col-lg-8 card shadow border-0 p-5 rounded-4 text-center">
			{#if state === 'options'}
				<h1 class="mb-4 fw-bold text-primary">Record Your Screen</h1>
				<p class="text-muted mb-5">
					A simple offline-capable screen recorder mimicking recordscreen.io. Choose an option below
					to get started. All recordings are kept securely on your device.
				</p>

				{#if hasError}
					<div class="alert alert-danger" role="alert">
						{errorMessage}
					</div>
				{/if}

				<div class="d-flex flex-column flex-sm-row justify-content-center gap-3">
					<button
						class="btn btn-primary btn-lg rounded-pill px-4 py-3 fw-bold"
						on:click={() => startRecordingSequence('screen+cam')}
					>
						<i class="bi bi-camera-video me-2" /> Screen + Camera
					</button>
					<button
						class="btn btn-outline-primary btn-lg rounded-pill px-4 py-3 fw-bold"
						on:click={() => startRecordingSequence('screen')}
					>
						<i class="bi bi-display me-2" /> Screen Only
					</button>
				</div>
			{/if}

			{#if state === 'starting'}
				<div class="my-5">
					<div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
						<span class="visually-hidden">Loading...</span>
					</div>
					<h3 class="mt-3 text-muted">Awaiting permissions...</h3>
				</div>
			{/if}

			{#if state === 'recording'}
				<h3 class="mb-3 text-danger">
					<span
						class="spinner-grow spinner-grow-sm me-2 text-danger"
						role="status"
						aria-hidden="true"
					/>Recording Live...
				</h3>

				<div
					class="ratio ratio-16x9 bg-dark rounded-3 overflow-hidden mb-4 shadow-sm"
					style="max-height: 500px;"
				>
					<!-- svelte-ignore a11y-media-has-caption -->
					<video bind:this={liveVideo} class="w-100 h-100 object-fit-contain" muted autoplay />
				</div>

				<button class="btn btn-danger btn-lg rounded-pill px-5 fw-bold" on:click={stopRecording}>
					Stop Recording
				</button>
			{/if}

			{#if state === 'playback'}
				<h2 class="mb-4 fw-bold text-success">Recording Complete!</h2>

				<div
					class="ratio ratio-16x9 bg-dark rounded-3 overflow-hidden mb-4 shadow-sm"
					style="max-height: 500px;"
				>
					<!-- svelte-ignore a11y-media-has-caption -->
					<video
						bind:this={playbackVideo}
						class="w-100 h-100 object-fit-contain"
						controls
						autoplay
					/>
				</div>

				<div class="d-flex flex-column flex-sm-row justify-content-center gap-3 align-items-center">
					<div class="input-group" style="max-width: 300px;">
						<select class="form-select form-select-lg" bind:value={downloadFormat}>
							<option value="webm">.webm</option>
							<option value="mkv">.mkv</option>
						</select>
						<button class="btn btn-success btn-lg fw-bold px-4" on:click={downloadVideo}>
							Download
						</button>
					</div>
					<button
						class="btn btn-outline-secondary btn-lg rounded-pill px-4 py-3 fw-bold"
						on:click={recordAnother}
					>
						Record Another
					</button>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	/* Some basic styles to complement Bootstrap */
	.object-fit-contain {
		object-fit: contain;
	}
	.min-vh-100 {
		min-height: 100vh;
	}
	.rounded-4 {
		border-radius: 1rem !important;
	}
</style>
