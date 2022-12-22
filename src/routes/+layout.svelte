<script lang="ts">
	import type { LayoutServerData } from './$types'
	import '$lib/reset.css'
	import { setContext } from 'svelte'

	export let data: LayoutServerData

	setContext('weekdays', data.days)
	setContext('meals', data.meals)
</script>

<svelte:head>
	<title>Middagsplanlegger</title>
</svelte:head>

<header>
	<strong>Middagsplanlegger</strong>
</header>
<main>
	<slot />
</main>

<style>
	:global(body) {
		max-width: 70ch;
		margin-inline: auto;
		padding-inline: 1rem;

		display: flex;
		flex-direction: column;
	}

	header {
		padding-block: 1rem;
	}

	main {
		height: 100%;
	}
</style>
