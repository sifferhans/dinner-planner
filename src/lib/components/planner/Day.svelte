<script lang="ts">
	import ListItem from '$lib/components/ListItem.svelte'
	import type { Day } from 'src/types'
	import MealSelector from './MealSelector.svelte'

	export let day: Day

	const weekDay = new Date().getDay()
	$: active = day.day === weekDay
</script>

<ListItem>
	<div class="day" class:active>
		<small>{day.name}</small>
		<MealSelector value={day.meal} />
	</div>
</ListItem>

<style>
	.day {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.active small {
		font-weight: bold;
	}
</style>
