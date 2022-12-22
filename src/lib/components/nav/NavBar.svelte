<script>
	import NavLink from './NavLink.svelte'
</script>

<header>
	<strong>Middag</strong>
	<nav>
		<ul>
			<li>
				<NavLink href="/">Planlegg</NavLink>
			</li>
			<li>
				<NavLink href="/meals">Retter</NavLink>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		padding-block: 1rem;
		display: flex;
		justify-content: space-between;
		gap: 1rem;
	}

	ul {
		display: flex;
		gap: 1rem;
	}
</style>
