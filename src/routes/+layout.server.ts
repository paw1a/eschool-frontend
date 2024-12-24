export const load = async ({locals}) => {
    const session = locals.session;
    console.log('Session: ', session)
    return {session};
};
