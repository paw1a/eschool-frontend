import {apiRequest} from "$lib/api/api.ts";
import {fail, redirect} from "@sveltejs/kit";

export const actions = {
    register: async ({request}) => {
        const formData = await request.formData();
        const email = String(formData.get('email'));
        const password = String(formData.get('password'));
        const name = String(formData.get('name'));
        const surname = String(formData.get('surname'));
        const phone = String(formData.get('phone'));

        const {data, error} = await apiRequest('/auth/sign-up', 'post', {
            name: name,
            surname: surname,
            phone: phone,
            email: email,
            password: password,
        })

        if (error) {
            throw fail(401, error)
        }

        console.log(data)

        throw redirect(303, '/auth/login')
    }
}