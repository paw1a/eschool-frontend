export const load = async ({locals, cookies}) => {
    const session = locals.session;
    console.log('Session: ', session)
    console.log('AUTH Cookie: ', cookies.get('AuthorizationToken'));
    return {session};
};
