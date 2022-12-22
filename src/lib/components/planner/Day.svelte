<script lang="ts">
	import ListItem from '$lib/components/ListItem.svelte'
	import type { Day, Meal } from 'src/types'
	import { getContext } from 'svelte'

	export let day: Day

	const meals = getContext<Meal[]>('meals')
	const weekDay = new Date().getDay()
	$: active = day.day === weekDay
</script>

<ListItem>
	<div class="day" class:active>
		<small>{day.name}</small>
		<select value={day.meal} name={String(day.id)}>
			{#each meals as meal}
				<option value={meal.id}>{meal.name}</option>
			{/each}
		</select>
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

	select {
		border: none;
		background-color: #f0f0f0;
		padding: 0.5rem;
		border-radius: 0.5rem;
	}
</style>
