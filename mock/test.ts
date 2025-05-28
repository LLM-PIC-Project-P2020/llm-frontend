import { MockConfig, MockMethod } from 'vite-plugin-mock';
import { components, operations } from "../api/openapi";

const correct_session_post_response : operations['sessionLogin']['responses']['200']['content']['application/json'] = {
    id: 1,
    token: 'TEST_TOKEN'
};

const courses_get_response : operations['enumerateCourses']['responses']['200']['content']['application/json'] = {
    courses: [
        {
            id: 1,
            name: "Stupid class",
        },
        {
            id: 2,
            name: "Very stupid class"
        },
        {
            id: 3,
            name: "Stupid class"
        },
        {
            id: 4,
            name: "Very stupid class"
        },
        {
            id: 5,
            name: "Stupid class"
        },
        {
            id: 6,
            name: "Very stupid class"
        },
    ]
};

const methods : MockMethod[] = [
    {
        url: '/api/mock/',
        method: 'get',
        rawResponse: async (req, res) => {
            res.statusCode = 200;
            res.end();
        },
    },
    {
        url: '/api/session/',
        method: 'post',
        rawResponse: async (req, res) => {
            let body = '';
            req.on('data', (chunk) => {body += chunk;});
            req.on('end', () => {
                const obj : components['schemas']['LoginRequest'] = JSON.parse(body);
                if (obj.id === 'admin' && obj.password === 'admin') {
                    res.statusCode = 200;
                    res.end(JSON.stringify(correct_session_post_response));
                } else {
                    res.statusCode = 400;
                    res.end();
                }
            });
        },
    },
    {
        url: '/api/courses/',
        method: 'get',
        response: courses_get_response
    },
    {
        url: '/api/tutorResponse/',
        method: 'post',
        rawResponse: async (req, res) => {
            let body = '';
            req.on('data', (chunk) => {body += chunk;});
            req.on('end', () => {
                const obj : components['schemas']['LLMPropmt'] = JSON.parse(body);

                res.end(`输入的代码为：${obj.code}\n输入的提示为：${obj.prompt}`);
            });
        }
    }
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (config : MockConfig) {
    return methods;
}
