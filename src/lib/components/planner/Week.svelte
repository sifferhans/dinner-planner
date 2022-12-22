<script lang="ts">
	import type { Day as TDay } from 'src/types'
	import List from '../List.svelte'
	import Day from './Day.svelte'

	export let days: TDay[]
</script>

<List>
	{#each days as day (day.id)}
		<Day day={day.name} />
	{/each}
</List>
