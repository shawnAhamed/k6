# K6 Example Project

This project contains K6 performance testing scripts for various API endpoints. The tests are configured to run different types of performance tests such as smoke, load, stress, spike, and soak tests.

## Project Structure

- **config/**: Contains the configuration for different test scenarios.
  - `testConfig.js`: Defines the configuration for various test types.
- **api/**: Contains the API request functions.
  - `getPostDetails.js`: Fetches details of a specific post.
  - `getComments.js`: Fetches comments for a specific post.
  - `getAllPost.js`: Fetches all posts.
  - `createPost.js`: Creates a new post.
- **tests/**: Contains the test scripts.
  - `main.test.js`: Main test script that runs different scenarios.
  - `scripts/`: Contains individual test scripts.
    - `getAllPosts.test.js`: Test script for fetching all posts.
    - `createPost.test.js`: Test script for creating a new post.
    - `getComments.test.js`: Test script for fetching comments.
    - `getPostDetails.test.js`: Test script for fetching post details.

## Running the Tests

1. Install K6: Follow the instructions on the [K6 installation page](https://k6.io/docs/getting-started/installation/).

2. Navigate to the project directory:
    ```sh
    cd /Users/shawn/Downloads/k6_example
    ```

3. Run the tests with the desired test type:
    ```sh
    k6 run --env TEST_TYPE=<testType> tests/main.test.js
    ```
    Replace `<testType>` with one of the following: `smoke`, `load`, `stress`, `spike`, `soak`, or `default`.

## Test Configuration

The test configurations are defined in `config/testConfig.js`. Each test type has its own configuration specifying the executor, number of virtual users (VUs), and duration.

## Example API Functions

- **getPostDetails**: Fetches details of a specific post.
    ```javascript
    import { getPostDetails } from '../api/getPostDetails.js';
    getPostDetails();
    ```

- **getComments**: Fetches comments for a specific post.
    ```javascript
    import { getComments } from '../api/getComments.js';
    getComments();
    ```

- **getAllPosts**: Fetches all posts.
    ```javascript
    import { getAllPosts } from '../api/getAllPost.js';
    getAllPosts();
    ```

- **createPost**: Creates a new post.
    ```javascript
    import { createPost } from '../api/createPost.js';
    const payload = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };
    createPost(payload);
    ```


## Performance Report

![Performance Report](./reports/summary.html)