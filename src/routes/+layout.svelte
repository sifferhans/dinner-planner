<script lang="ts">
	import NavBar from '$lib/components/nav/NavBar.svelte'
	import type { LayoutServerData } from './$types'
	import { setContext } from 'svelte'
	import '$lib/reset.css'

	export let data: LayoutServerData

	setContext('weekdays', data.days)
	setContext('meals', data.meals)
</script>

<svelte:head>
	<title>Middagsplanlegger</title>
</svelte:head>

<NavBar />
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

	main {
		height: 100%;
	}
</style>
