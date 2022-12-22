<script lang="ts">
	import type { Meal } from 'src/types'
	import MealSelector from './MealSelector.svelte'

	export let day: string
</script>

<div class="day">
	<small>{day}</small>
	<MealSelector />
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
