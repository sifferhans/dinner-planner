<script lang="ts">
	import type { Meal } from 'src/types'
	import { getContext } from 'svelte'

	const meals = getContext<Meal[]>('meals')
</script>

<select name="meal">
	{#each meals as meal}
		<option value={meal.id}>{meal.name}</option>
	{/each}
</select>

<style>
	select {
		border: none;
		background-color: #f0f0f0;
		padding: 0.5rem;
		border-radius: 0.5rem;
	}
</style>
