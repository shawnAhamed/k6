import http from 'k6/http';
import { check } from 'k6';

export function getComments() {
    let res = http.get('https://jsonplaceholder.typicode.com/comments?postId=1', {
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    });

    check(res, {
        'is status 200': (r) => r.status === 200
    });
}
