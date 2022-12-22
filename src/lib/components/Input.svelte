<script lang="ts">
	export let label: string
</script>

<label>
	<span>{label}</span>
	<input {...$$restProps} />
</label>

<style>
	label {
		display: grid;
		gap: 0.5rem;
	}

	input {
		padding: 0.5rem 1rem;
		border: 1px solid;
		border-radius: 0.5rem;
	}

	input::placeholder {
		opacity: 0.7;
	}

	span {
		display: flex;
		justify-content: space-between;
		gap: 0.5rem;
	}

	label:has(input:not(:required)) span::after {
		content: '(opsjonelt)';
		opacity: 0.5;
	}
</style>
