import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, platform }) => {
	if (!platform?.env?.MY_CONTAINER) {
		return new Response(JSON.stringify({ detail: 'Container binding not available' }), {
			status: 503,
			headers: { 'Content-Type': 'application/json' }
		});
	}

	const id = platform.env.MY_CONTAINER.idFromName('cam-processor');
	const stub = platform.env.MY_CONTAINER.get(id);

	const containerReq = new Request(`http://container/api/download/${params.jobId}`);
	return stub.fetch(containerReq);
};
