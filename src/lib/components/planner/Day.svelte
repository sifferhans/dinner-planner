<script lang="ts">
	import ListItem from '$lib/components/ListItem.svelte'
	import MealSelector from './MealSelector.svelte'

	export let day: string
</script>

<ListItem>
	<div class="day">
		<small>{day}</small>
		<MealSelector />
	</div>
</ListItem>

<style>
	.day {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
