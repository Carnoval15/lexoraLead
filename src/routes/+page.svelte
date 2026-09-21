<script>
	let { data } = $props();
	import * as Table from '$lib/components/ui/table/index.js';

	function getRankBadge(rank) {
		if (rank === 1) return 'bg-primary text-primary-foreground';
		if (rank === 2) return 'bg-secondary text-secondary-foreground';
		if (rank === 3) return 'bg-accent text-accent-foreground';
		return 'bg-muted text-muted-foreground';
	}
</script>

<div class="mx-auto max-w-4xl px-4 py-8">
	<div class="space-y-6">
		<div class="flex items-center justify-between">
			<h1 class="text-3xl font-bold tracking-tight">Lexora Leaderboard</h1>
			<p class="text-sm text-muted-foreground">
				Last update: {data.last_update ? new Date(data.last_update).toLocaleString() : 'Unknown'}
			</p>
		</div>

		<!-- Card -->
		<Table.Root class="rounded-lg">
			<Table.Header>
				<Table.Row class="font-bold">
					<!-- <Table.Head class="w-[30px]">Rank</Table.Head> -->
					<Table.Head class="w-2">Rank</Table.Head>
					<Table.Head>Username</Table.Head>
					<Table.Head>Steam ID</Table.Head>
					<Table.Head class="text-end">Score</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				{#each data.players as player, i}
					<Table.Row>
						<Table.Cell class="flex items-center gap-2 px-4 py-3 font-medium text-foreground"
							><span class="{getRankBadge(i + 1)} rounded-full px-2 py-0.5 text-xs font-medium"
								>{i + 1}</span
							>
							<span class="sr-only">Rank {i + 1}</span></Table.Cell
						>
						<Table.Cell class="px-4 py-3">{player.username}</Table.Cell>
						<Table.Cell class="px-4 py-3 text-muted-foreground">{player.steam64}</Table.Cell>
						<Table.Cell class="px-4 py-3 text-right font-semibold">{player.score}</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>

		<!-- <div class="rounded-lg border border-border bg-card p-6 shadow-sm"> -->
			<!-- <div class="overflow-x-auto">
				<table class="w-full text-left text-sm rtl:text-right">
					<thead class="bg-muted">
						<tr>
							<th class="px-4 py-3 font-medium text-foreground">Rank</th>
							<th class="px-4 py-3 font-medium text-foreground">Username</th>
							<th class="px-4 py-3 font-medium text-foreground">Steam ID</th>
							<th class="px-4 py-3 text-right font-medium text-foreground">Score</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-border">
						{#each data.players as player, i}
							<tr class="hover:bg-muted">
								<td class="flex items-center gap-2 px-4 py-3 font-medium text-foreground">
									<span class="{getRankBadge(i + 1)} rounded-full px-2 py-0.5 text-xs font-medium"
										>{i + 1}</span
									>
									<span class="sr-only">Rank {i + 1}</span>
								</td>
								<td class="px-4 py-3">{player.username}</td>
								<td class="px-4 py-3 text-muted-foreground">{player.steam64}</td>
								<td class="px-4 py-3 text-right font-semibold">{player.score}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div> -->
			<!-- {#else}
				<p class="text-center py-8 text-muted-foreground">
					No players found.
				</p>
			{/else} -->
		<!-- </div> -->
	</div>
</div>
