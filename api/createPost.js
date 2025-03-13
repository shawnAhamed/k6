import http from 'k6/http';
import { check } from 'k6';

export function createPost(payload) {
    let res = http.post('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        body: payload
    });

    check(res, {
        'is status 200': (r) => r.status === 200,
        'response body is not empty': (r) => r.body.length > 0,
    });
}
