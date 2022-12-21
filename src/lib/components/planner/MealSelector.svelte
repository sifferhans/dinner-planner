<script lang="ts">
	import type { Meal } from 'src/types';

	export let meals: Meal[];
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
		border-radius: 0.2rem;
	}
</style>
