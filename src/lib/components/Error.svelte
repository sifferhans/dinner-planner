<script lang="ts">
	export let message: string
</script>

<div class="error">
	<h1>Beklager, noe gikk galt!</h1>
	<p>{message}</p>
</div>

<style>
	.error {
		margin-block: 4rem;
	}

	h1 {
		margin-block: 1rem;
	}

	p {
		background-color: #f5f5f5;
		padding: 1rem;
	}
</style>
