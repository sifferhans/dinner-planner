<script lang="ts">
	import type { Meal } from 'src/types'
	import { getContext } from 'svelte'
	import MealListItem from '$lib/components/meal/MealListItem.svelte'
	import MealList from '$lib/components/meal/MealList.svelte'
	import Button from '$lib/components/Button.svelte'

	const meals = getContext<Meal[]>('meals')
</script>

<div>
	<MealList>
		{#each meals as meal (meal.id)}
			<MealListItem {...meal} />
		{/each}
	</MealList>
	<Button href="/meals/add" block>Legg til ny rett</Button>
</div>

<style>
	div {
		display: grid;
		gap: 1rem;
	}
</style>
