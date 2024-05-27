import {redirect} from "@sveltejs/kit";

export const load = async ({locals}) => {
    const session = locals.session;
    if (!session) {
        throw redirect(302, '/auth/login')
    }

    return {session};
};

export const actions = {
    logout: async ({cookies, locals}) => {
        cookies.delete('AuthorizationToken', { path: '/' });
        locals.session = undefined;
        throw redirect(302, '/auth/login');
    }
}
