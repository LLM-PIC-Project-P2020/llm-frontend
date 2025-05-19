import { MockConfig, MockMethod } from 'vite-plugin-mock';
import { components, operations } from "../api/openapi";

const correct_session_post_response : operations['sessionLogin']['responses']['200']['content']['application/json'] = {
    id: 1,
    token: 'TEST_TOKEN'
};

const methods : MockMethod[] = [
    {
        url: '/api/mock',
        method: 'get',
        rawResponse: async (req, res) => {
            res.statusCode = 200;
            res.end();
        },
    },
    {
        url: '/api/session',
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
    }
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (config : MockConfig) {
    return methods;
}
