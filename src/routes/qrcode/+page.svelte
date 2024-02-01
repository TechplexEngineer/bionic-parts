<script lang="ts">
	import type { Snapshot } from './$types';

	import ListGroup from './ListGroup.svelte';
	import QrCode from './QRCode.svelte';
	import { encoder } from './encoder';

	const QRCodeTypes = [
		'Raw Data',
		'URL Web Link',
		'Phone Number',
		'Text Message',
		'Wi-Fi Credentials',
		'Email',
		'Calendar Event',
		'vCard Contact Card'
	];
	let activeItem = QRCodeTypes[0];

    
	

	$: valueToEncode = encoder({
        activeItem,
        rawText,
        urlLink,
        telPhoneNumber,
        smsPhoneNumber,
        smsMessage,
        wifiAuth,
        wifiNetworkName,
        wifiPassword,
        wifiIsHidden,
        emailAddress,
        eventTitle,
        eventDescription,
        eventLocation,
        eventStartDate,
        eventStartTime,
        eventEndDate,
        eventEndTime,
        vcardPrefix,
        vcardFirstName,
        vcardLastName,
        vcardPhoneNumber,
        vcardEmail,
        vcardBirthday,
        vcardAddress,
        vcardWebsite,
        vcardOrg,
        vcardJobTitle,
        vcardWorkPhone
    });

	let rawText = 'Test Raw Value';
	let urlLink = 'https://';
	let telPhoneNumber = '+1-555-555-5555';
	let smsPhoneNumber = '+1-555-555-5555';
	let smsMessage = 'Hello from the QRCode Generator';

	let wifiAuth = 'WPA';
	let wifiNetworkName = 'SSID';
	let wifiPassword = '';
	let wifiIsHidden = false;

	let emailAddress = 'hello@example.com';

	let eventTitle = 'My Event';
	let eventDescription = 'Come to the awesome event!';
	let eventLocation = 'Fantastic local venue';
	let eventStartDate = new Date().toISOString().split('T')[0];
	let eventStartTime = '';
	let eventEndDate = new Date().toISOString().split('T')[0];
	let eventEndTime = '';

    let vcardPrefix = '';
    let vcardFirstName = 'John';
    let vcardLastName = 'Doe';
    let vcardPhoneNumber = '+1-555-555-5555';
    let vcardEmail = 'hello@example.com';
    let vcardBirthday = new Date().toISOString().split('T')[0];
    let vcardAddress = '';
    let vcardWebsite = 'https://example.com';
    let vcardOrg = 'Example Inc.';
    let vcardJobTitle = 'CEO';
    let vcardWorkPhone = '+1-666-666-6666';

	export const snapshot: Snapshot<{ storedActiveItem: string }> = {
		capture: () => {
			console.log('capturing activeItem', activeItem);

			return { storedActiveItem: activeItem };
		},
		restore: ({ storedActiveItem }) => {
			console.log('restoring activeItem', storedActiveItem);

			activeItem = storedActiveItem;
		}
	};
</script>

<svelte:head>
	<title>QR Code Generator : Bionic Parts</title>
	<meta name="description" content="QR Code Generator" />
</svelte:head>

<div class="container mt-4">
	<h1>Qr Code Generator</h1>

	<div class="row">
		<div class="col">
			<div class="card mt-4">
				<div class="card-body">
					<h2>QRCode Type</h2>

					<ListGroup items={QRCodeTypes} bind:activeItem />
				</div>
			</div>
		</div>
		<div class="col">
			<div class="card mt-4">
				<div class="card-body">
					<h2>QRCode Value</h2>
					{#if activeItem == 'Raw Data'}
						<textarea class="form-control" bind:value={rawText} />
					{/if}
					{#if activeItem == 'URL Web Link'}
						<input type="text" class="form-control" bind:value={urlLink} />
					{/if}
					{#if activeItem == 'Phone Number'}
						<div class="mb-3">
							<label class="form-label" for="telPhoneNumber">Phone number</label>
							<input
								type="tel"
								class="form-control"
								id="telPhoneNumber"
								bind:value={telPhoneNumber}
							/>
						</div>
					{/if}
					{#if activeItem == 'Text Message'}
						<div class="mb-3">
							<label class="form-label" for="smsPhoneNumber">Phone number</label>
							<input
								type="text"
								id="smsPhoneNumber"
								class="form-control"
								bind:value={smsPhoneNumber}
							/>
						</div>
						<div class="mb-3">
							<label class="form-label" for="smsMessage">Message</label>
							<textarea class="form-control" id="smsMessage" bind:value={smsMessage} />
						</div>
					{/if}
					{#if activeItem == 'Wi-Fi Credentials'}
						<div class="mb-3">
							<label class="form-label" for="wifiAuth">Authentication Type</label>
							<select class="form-select" id="wifiAuth" bind:value={wifiAuth}>
								<option value="WPA">WPA/WPA2</option>
								<option value="None">None</option>
								<option value="WEP">WEP</option>
							</select>
						</div>

						<div class="mb-3">
							<label class="form-label" for="wifiNetworkName">WiFi Network Name</label>
							<input
								type="text"
								class="form-control"
								id="wifiNetworkName"
								bind:value={wifiNetworkName}
							/>
						</div>
						{#if wifiAuth !== 'None'}
							<div class="mb-3">
								<label class="form-label" for="wifiPassword">WiFi Password</label>
								<input
									type="text"
									class="form-control"
									id="wifiPassword"
									bind:value={wifiPassword}
								/>
							</div>
						{/if}
						<div class="form-check mb-3">
							<label class="form-check-label" for="wifiIsHidden">Hidden WiFi Network</label>
							<input
								type="checkbox"
								class="form-check-input"
								id="wifiIsHidden"
								bind:value={wifiIsHidden}
							/>
						</div>
					{/if}
					{#if activeItem == 'Email'}
						<div class="mb-3">
							<label class="form-label" for="emailAddress">Email address</label>
							<input
								type="email"
								class="form-control"
								id="emailAddress"
								bind:value={emailAddress}
							/>
						</div>
					{/if}
					{#if activeItem == 'Calendar Event'}
						<div class="mb-3">
							<label class="form-label" for="eventTitle">Title</label>
							<input type="text" class="form-control" id="eventTitle" bind:value={eventTitle} />
						</div>
						<div class="mb-3">
							<label class="form-label" for="eventDescription">Description</label>
							<input
								type="text"
								class="form-control"
								id="eventDescription"
								bind:value={eventDescription}
							/>
						</div>
						<div class="mb-3">
							<label class="form-label" for="eventLocation">Location</label>
							<input
								type="text"
								class="form-control"
								id="eventLocation"
								bind:value={eventLocation}
							/>
						</div>
						<div class="row">
							<div class="col">
								<div class="mb-3">
									<label class="form-label" for="eventStartDate">Start Date</label>
									<input
										type="date"
										class="form-control"
										id="eventStartDate"
										bind:value={eventStartDate}
									/>
								</div>
							</div>
							<div class="col">
								<div class="mb-3">
									<label class="form-label" for="eventStartTime">Start Time</label>
									<input
										type="time"
										class="form-control"
										id="eventStartTime"
										bind:value={eventStartTime}
									/>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col">
								<div class="mb-3">
									<label class="form-label" for="eventEndDate">End Date</label>
									<input
										type="date"
										class="form-control"
										id="eventEndDate"
										bind:value={eventEndDate}
									/>
								</div>
							</div>
							<div class="col">
								<div class="mb-3">
									<label class="form-label" for="eventEndTime">End Time</label>
									<input
										type="time"
										class="form-control"
										id="eventEndTime"
										bind:value={eventEndTime}
									/>
								</div>
							</div>
						</div>
					{/if}
					{#if activeItem == 'vCard Contact Card'}
						<div class="row">
							<div class="col">
								<div class="mb-3">
									<label class="form-label" for="vcardPrefix">Prefix</label>
									<input
										type="text"
										class="form-control"
										id="vcardPrefix"
										bind:value={vcardPrefix}
									/>
								</div>
							</div>
							<div class="col">
								<div class="mb-3">
									<label class="form-label" for="vcardFirstName">First Name</label>
									<input
										type="text"
										class="form-control"
										id="vcardFirstName"
										bind:value={vcardFirstName}
									/>
								</div>
							</div>
                            <div class="col">
								<div class="mb-3">
									<label class="form-label" for="vcardLastName">Last Name</label>
									<input
										type="text"
										class="form-control"
										id="vcardLastName"
										bind:value={vcardLastName}
									/>
								</div>
							</div>
						</div>
                        <div class="mb-3">
                            <label class="form-label" for="vcardPhoneNumber">Phone Number</label>
                            <input
                                type="text"
                                class="form-control"
                                id="vcardPhoneNumber"
                                bind:value={vcardPhoneNumber}
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="vcardEmail">Email</label>
                            <input
                                type="text"
                                class="form-control"
                                id="vcardEmail"
                                bind:value={vcardEmail}
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="vcardBirthday">Birthday</label>
                            <input
                                type="date"
                                class="form-control"
                                id="vcardBirthday"
                                bind:value={vcardBirthday}
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="vcardAddress">Address</label>
                            <input
                                type="text"
                                class="form-control"
                                id="vcardAddress"
                                bind:value={vcardAddress}
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="vcardWebsite">Website</label>
                            <input
                                type="text"
                                class="form-control"
                                id="vcardWebsite"
                                bind:value={vcardWebsite}
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="vcardOrganization">Organization</label>
                            <input
                                type="text"
                                class="form-control"
                                id="vcardOrganization"
                                bind:value={vcardOrg}
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="vcardTvcardJobTitleitle">Job Title</label>
                            <input
                                type="text"
                                class="form-control"
                                id="vcardJobTitle"
                                bind:value={vcardJobTitle}
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label" for="vcardWorkPhone">Work Phone Number</label>
                            <input
                                type="tel"
                                class="form-control"
                                id="vcardWorkPhone"
                                bind:value={vcardWorkPhone}
                            />
                        </div>
					{/if}
				</div>
			</div>
		</div>
		<div class="col">
			<div class="card mt-4">
				<div class="card-body">
					<h2>Generated QRCode</h2>

					<QrCode value={valueToEncode} />
					<br />
					Raw:
                    <code>
					<pre>{valueToEncode}</pre>
                    </code>
				</div>
			</div>
		</div>
	</div>
</div>
