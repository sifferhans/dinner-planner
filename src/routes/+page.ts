import { error as kitError } from "@sveltejs/kit"
import { supabase } from "src/supabase"
import type { PageLoad } from "./$types"

export const load: PageLoad = async () => {
	const { data: days, error } = await supabase
		.from('weekdays')
		.select('*')

	if (!days || error) {
		throw kitError(404, { message: 'Something happened' })
	}

	console.log(days)

	return {
		days
	}
}