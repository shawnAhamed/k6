import http from 'k6/http';
import { check } from 'k6';

export function getPostDetails() {
    let res = http.get('https://jsonplaceholder.typicode.com/posts/1', {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    });

    check(res, {
        'is status 200': (r) => r.status === 200
    });
}
