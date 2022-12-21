<script lang="ts">
	import '$lib/reset.css';
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
	}

	header {
		padding-block: 1rem;
	}

	nav ul {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	nav li {
		padding: 1rem;
	}
</style>
