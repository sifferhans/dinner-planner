<script lang="ts">
	export let href: string | null = null
	export let block: boolean = false
</script>

<svelte:element this={href ? 'a' : 'button'} {href} class="button" class:block {...$$restProps}>
	<slot />
</svelte:element>

<style>
	.button {
		background: #f0f0f0;
		border: none;
		border-radius: 0.5rem;
		padding: 0.5rem 1rem;
		color: inherit;
		font: inherit;
		text-decoration: none;

		display: inline-flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}

	.button.block {
		display: flex;
		width: 100%;
	}
</style>
