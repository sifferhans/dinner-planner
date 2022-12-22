<script lang="ts">
	import { page } from '$app/stores'

	export let href: string
</script>

<a {href} class:active={$page.route.id == href}>
	<slot />
</a>

<style>
	a {
		color: inherit;
		text-decoration: none;
		position: relative;
	}

	a::after {
		content: '';
		position: absolute;
		bottom: -4px;
		left: 0;
		width: 0;
		border-bottom: 1px solid;
		transition: width 150ms;
	}

	a.active::after {
		width: 100%;
	}
</style>
