import supabase from "$lib/supabase";
import { fail, redirect } from "@sveltejs/kit";
import type { Meal } from "src/types";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
	const { data: meal, error } = await supabase
		.from('meals')
		.select()
		.eq('id', params.id)
		.single()

	if (!meal || error) throw fail(404, { message: 'Kan ikke finne retten' })

	return {
		meal: meal as Meal
	}
}

export const actions: Actions = {
	async save({ request, params }) {
		const form = await request.formData()

		const name = form.get('name')
		const recipe_url = form.get('recipe_url')

		if (!name) throw redirect(300, '/meals')

		const { data, error } = await supabase
			.from('meals')
			.update({ name, recipe_url })
			.eq('id', params.id)

		if (error) throw redirect(300, '/meals')

		throw redirect(302, '/meals')
	}
}