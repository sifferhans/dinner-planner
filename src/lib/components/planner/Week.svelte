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
		border: 1px solid;
		border-radius: 0.5rem;
	}

	:global(.day:not(:last-child)) {
		border-bottom: 1px solid;
	}
</style>
