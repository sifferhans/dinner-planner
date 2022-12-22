<script lang="ts">
	import MealSelector from './MealSelector.svelte'

	export let day: string
</script>

<div class="day">
	<small>{day}</small>
	<MealSelector />
</div>

<style>
	.day {
		padding: 0.75rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
