<script lang="ts">
	import type { ActionData, PageServerData } from './$types'
	import Button from '$lib/components/Button.svelte'
	import Input from '$lib/components/Input.svelte'

	export let data: PageServerData
</script>

<h1>Rediger rett</h1>
<form method="post" action="?/save">
	<Input name="name" label="Navn" required value={data.meal.name} />
	<Input name="recipe_url" type="url" label="Link til oppskrift" value={data.meal.recipe_url} />
	<Button block type="submit">Lagre</Button>
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
