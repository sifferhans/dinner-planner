<script lang="ts">
	import type { Meal } from 'src/types'
	import { getContext } from 'svelte'
	import MealListItem from '$lib/components/meal/MealListItem.svelte'
	import MealList from '$lib/components/meal/MealList.svelte'

	const meals = getContext<Meal[]>('meals')
</script>

<MealList>
	{#each meals as meal (meal.id)}
		<MealListItem {...meal} />
	{/each}
</MealList>
