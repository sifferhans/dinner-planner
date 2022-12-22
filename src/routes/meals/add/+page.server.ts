import supabase from "$lib/supabase";
import { fail, redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
	async add({ request }) {
		const data = await request.formData()

		const name = data.get('name')
		const recipe_url = data.get('recipe_url') || null

		if (!name) return fail(400, { error: 'Definer et navn' })

		const meal = await supabase
			.from('meals')
			.insert({
				name,
				recipe_url
			})
			.select()

		if (!meal) return fail(400, { error: 'Kunne ikke legge til rett' })

		throw redirect(303, '/meals')
	}
}