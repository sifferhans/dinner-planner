import { error as kitError } from "@sveltejs/kit"
import type { LayoutServerLoad } from "./$types"
import type { Day, Meal } from "src/types"
import supabase from "$lib/supabase"

export const load: LayoutServerLoad = async () => {
	const { data: days, error: dayError } = await supabase
		.from('weekdays')
		.select()

	const { data: meals, error: mealError } = await supabase
		.from('meals')
		.select()

	if (!days?.length || dayError) {
		throw kitError(502, { message: 'Kunne ikke hente ukeplan' })
	}

	if (!meals?.length || mealError) {
		throw kitError(502, { message: 'Kunne ikke hente retter' })
	}

	return {
		days: days as Day[],
		meals: meals as Meal[]
	}
}