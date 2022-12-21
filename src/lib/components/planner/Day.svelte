<script lang="ts">
	import type { Meal } from 'src/types';
	import MealSelector from './MealSelector.svelte';

	export let day: string;

	const meals: Meal[] = [
		{ id: '1', name: 'Burger' },
		{ id: '2', name: 'Lasagne' },
		{ id: '3', name: 'Taco' }
	];
</script>

<div class="day">
	<small>{day}</small>
	<MealSelector {meals} />
</div>

<style>
	.day {
		padding: 0.5rem;
		border: 1px solid;
		border-radius: 0.5rem;

		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
