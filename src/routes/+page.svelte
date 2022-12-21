<script lang="ts">
	import type { PageData } from './$types'
	import Week from '$lib/components/planner/Week.svelte'

	export let data: PageData
</script>

<Week />
