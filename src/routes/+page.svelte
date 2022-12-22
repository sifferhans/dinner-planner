<script lang="ts">
	import Button from '$lib/components/Button.svelte'
	import Week from '$lib/components/planner/Week.svelte'
	import type { Day } from 'src/types'
	import { getContext } from 'svelte'

	const days = getContext<Day[]>('weekdays')
</script>

<form action="?/update" method="post">
	<Week {days} />
	<Button type="submit" block>Lagre</Button>
</form>

<style>
	form {
		display: grid;
		gap: 1rem;
	}
</style>
