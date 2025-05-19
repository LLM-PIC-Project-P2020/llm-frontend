import { MockConfig, MockMethod } from 'vite-plugin-mock';
import { components } from "../api/openapi";

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
        url: '/api/sessions',
        method: 'post',
        rawResponse: async (req, res) => {
            let body = '';
            req.on('data', (chunk) => {body += chunk;});
            req.on('end', () => {
                const obj : components['schemas']['LoginRequest'] = JSON.parse(body);
                if (obj.id === 'admin' && obj.password === 'admin') {
                    res.statusCode = 200;
                    res.end('TEST_TOKEN');
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
