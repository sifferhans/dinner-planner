<script lang="ts">
	import type { Meal } from 'src/types'
	import ListItem from '$lib/components/ListItem.svelte'
	import IconExternalLink from '$lib/components/icons/IconExternalLink.svelte'
	import IconEdit from '../icons/IconEdit.svelte'

	export let id: number
	export let name: Meal['name']
	export let recipe_url: Meal['recipe_url'] = '#'
</script>

<ListItem>
	<div>
		<a href="/meals/{id}/edit">
			<p>{name}</p>
			<!-- <IconEdit /> -->
		</a>
		{#if recipe_url}
			<a href={recipe_url} target="_blank" rel="noreferrer">
				Gå til oppskrift
				<IconExternalLink />
			</a>
		{/if}
	</div>
</ListItem>

<style>
	div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	a:has(p) {
		text-decoration: none;
	}

	a {
		color: inherit;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		/* text-decoration: none; */
	}
</style>
