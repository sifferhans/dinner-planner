<script lang="ts">
	import Week from '$lib/components/planner/Week.svelte'
	import type { Day, Meal } from 'src/types'
	import { getContext } from 'svelte'

	const days = getContext<Day[]>('weekdays')
</script>

<Week {days} />
