import { createPost } from '../../api/createPost.js';

// Define token and payload

const payload = {
    title: 'foo',
    body: 'bar',
    userId: 1
};

// Call the createPost function
createPost(payload);
