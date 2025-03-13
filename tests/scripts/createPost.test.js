import { createPost } from '../../api/createPost.js';


export function createPostTest() {
    const payload = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };
    createPost(payload);
}

