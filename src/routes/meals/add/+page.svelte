<script lang="ts">
	import type { ActionData } from './$types'
	import Button from '$lib/components/Button.svelte'
	import Input from '$lib/components/Input.svelte'

	export let form: ActionData
</script>

<h1>Ny rett</h1>
<form method="post" action="?/add">
	<Input name="name" label="Navn" placeholder="Taco" required />
	<Input
		name="recipe_url"
		label="Link til oppskrift"
		placeholder="https://oppskrifter.no/taco"
		type="url"
	/>
	<Button block type="submit">Legg til</Button>
</form>

<style>
	h1 {
		margin-bottom: 1rem;
	}

	form {
		display: grid;
		gap: 1rem;
	}
</style>
