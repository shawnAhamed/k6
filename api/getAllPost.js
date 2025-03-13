import http from 'k6/http';
import { check } from 'k6';

export function getAllPosts() {
    let res = http.get('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    });

    check(res, {
        'is status 200': (r) => r.status === 200
    });
}
