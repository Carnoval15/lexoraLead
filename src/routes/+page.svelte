<script>
	let { data } = $props();

	function getRankBadge(rank) {
		if (rank === 1) return 'bg-primary text-primary-foreground';
		if (rank === 2) return 'bg-secondary text-secondary-foreground';
		if (rank === 3) return 'bg-accent text-accent-foreground';
		return 'bg-muted text-muted-foreground';
	}
</script>

<div class="mx-auto max-w-4xl px-4 py-8">
	<div class="space-y-6">
		<div class="flex justify-between items-center">
			<h1 class="text-3xl font-bold tracking-tight">
				Lexora Leaderboard
			</h1>
			<p class="text-sm text-muted-foreground">
				Last update: {data.last_update ? new Date(data.last_update).toLocaleString() : 'Unknown'}
			</p>
		</div>

		<!-- Card -->
		<div class="bg-card border border-border rounded-lg shadow-sm p-6">
			<div class="overflow-x-auto">
				<table class="w-full text-sm text-left rtl:text-right">
					<thead class="bg-muted">
						<tr>
							<th class="px-4 py-3 font-medium text-foreground">Rank</th>
							<th class="px-4 py-3 font-medium text-foreground">Username</th>
							<th class="px-4 py-3 font-medium text-foreground">Steam ID</th>
							<th class="px-4 py-3 font-medium text-foreground text-right">Score</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-border">
						{#each data.players as player, i}
							<tr class="hover:bg-muted">
								<td class="px-4 py-3 text-foreground font-medium flex items-center gap-2">
									<span class="{getRankBadge(i + 1)} rounded-full px-2 py-0.5 text-xs font-medium">{i + 1}</span>
									<span class="sr-only">Rank {i + 1}</span>
								</td>
								<td class="px-4 py-3">{player.username}</td>
								<td class="px-4 py-3 text-muted-foreground">{player.steam64}</td>
								<td class="px-4 py-3 text-right font-semibold">{player.score}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
			<!-- {#else}
				<p class="text-center py-8 text-muted-foreground">
					No players found.
				</p>
			{/else} -->
		</div>
	</div>
</div>
