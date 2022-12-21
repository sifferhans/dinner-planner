<script lang="ts">
	import type { Day as TDay } from 'src/types'
	import Day from './Day.svelte'

	export let days: TDay[]
</script>

<div>
	{#each days as day (day.id)}
		<Day day={day.name} />
	{/each}
</div>

<style>
	div {
		display: grid;
		gap: 0.5rem;
	}
</style>
