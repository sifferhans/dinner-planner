import supabase from "$lib/supabase";
import { fail } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
	async update({ request }) {
		const form = await request.formData()
		const days = {
			1: form.get('1'),
			2: form.get('2'),
			3: form.get('3'),
			4: form.get('4'),
			5: form.get('5'),
			6: form.get('6'),
			7: form.get('7'),
		}

		const { data, error } = await supabase
			.from('weekdays')
			.upsert([
				...Object.entries(days).map(([key, value]) => ({
					id: key,
					meal: value
				}))
			])

		if (error) throw fail(500, { message: 'Kunne ikke lagre' })
	}
}