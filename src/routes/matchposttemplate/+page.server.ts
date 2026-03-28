import { TBA_API_KEY } from '$env/static/private';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url, fetch }) => {
	const matchKey = url.searchParams.get('match') || '2026mabos_qm1';
	let matchData = null;

	if (TBA_API_KEY) {
		try {
			const res = await fetch(`https://www.thebluealliance.com/api/v3/match/${matchKey}`, {
				headers: {
					'X-TBA-Auth-Key': TBA_API_KEY,
					accept: 'application/json'
				}
			});
			if (res.ok) {
				matchData = await res.json();
			}
		} catch (e) {
			console.error('Error fetching TBA match data', e);
		}
	}

	return {
		matchKey,
		matchData
	};
};
