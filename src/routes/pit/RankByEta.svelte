<script lang="ts">
	import Badge from './Badge.svelte';

	export let eventRank: number; //data.ourRanking ? data.ourRanking.record.qual.rank : '?'
	export let eventNumTeams: number; //data.ourRanking ? data.ourRanking.record.qual.num_teams : '?'
</script>

<div class="d-flex align-items-center justify-content-center gap-3">
	<Badge value={eventRank} prefix={'Event'} desc={`out of ${eventNumTeams}`} />
	<Badge
		value={data.teamYear.epa.ranks.state.rank}
		prefix={data.teamYear.state || 'State'}
		desc={`out of ${data.teamYear.epa.ranks.state.team_count}`}
	/>
	<Badge
		value={data.teamYear.epa.ranks.district.rank}
		prefix={data.teamYear.district || 'District'}
		desc={`out of ${data.teamYear.epa.ranks.district.team_count}`}
	/>
	<Badge
		value={data.teamYear.epa.ranks.country.rank}
		prefix={'USA'}
		desc={`out of ${data.teamYear.epa.ranks.country.team_count}`}
	/>
	<Badge
		value={data.teamYear.epa.ranks.total.rank}
		prefix={'Worldwide'}
		desc={`out of ${data.teamYear.epa.ranks.total.team_count}`}
	/>
</div>
