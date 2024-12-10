import {apiRequest} from "$lib/api/api.ts";
import {redirect, error} from "@sveltejs/kit";
import axios from "axios";

export const load = async ({cookies, locals, params}) => {
    const session = locals.session;
    if (!session) {
        throw redirect(302, '/auth/login')
    }

    const token = cookies.get('AuthorizationToken');
    const {data: course, error: err} = await apiRequest('/courses/' + params.course + '/brief', 'get', undefined, token);
    if (err) {
        throw error(500, {message: err.error})
    }

    const {data: lessons, error: lessonError} = await apiRequest('/courses/' + params.course + '/lessons/', 'get', undefined, token);
    if (lessonError) {
        throw error(500, {message: lessonError.error})
    }

    for (let i = 0; i < lessons.length; i++) {
        if (lessons[i].type === 'theory') {
            lessons[i].theory_url = lessons[i].theory_url.replace('minio', 'localhost');
            const {data: theory} = await axios.get(lessons[i].theory_url);
            lessons[i].markdown = theory;
        } else if (lessons[i].type === 'practice') {
            if (lessons[i].tests.length == 0) {
                throw error(500);
            }
            lessons[i].tests[0].task_url = lessons[i].tests[0].task_url.replace('minio', 'localhost');
            const {data: task} = await axios.get(lessons[i].tests[0].task_url);
            lessons[i].markdown = task;
        }
    }

    return {course, lessons};
};
