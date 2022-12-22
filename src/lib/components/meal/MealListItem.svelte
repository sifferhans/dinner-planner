<script lang="ts">
	import type { Meal } from 'src/types'
	import ListItem from '$lib/components/ListItem.svelte'

	export let name: Meal['name']
</script>

<ListItem>
	<p>{name}</p>
</ListItem>
