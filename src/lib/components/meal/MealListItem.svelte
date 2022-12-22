<script lang="ts">
	import type { Meal } from 'src/types'
	import ListItem from '$lib/components/ListItem.svelte'
	import IconExternalLink from '$lib/components/icons/IconExternalLink.svelte'

	export let name: Meal['name']
	export let recipe_url: Meal['recipe_url'] = '#'
</script>

<ListItem>
	<a href={recipe_url} target="_blank" rel="noreferrer">
		<p>{name}</p>
		{#if recipe_url}
			<span>
				Gå til oppskrift
				<IconExternalLink />
			</span>
		{/if}
	</a>
</ListItem>

<style>
	a {
		color: inherit;
		text-decoration: none;
		width: 100%;
		display: inline-flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	span {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		text-decoration: underline;
	}
</style>
