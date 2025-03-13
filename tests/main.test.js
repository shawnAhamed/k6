import * as index from './scripts/index.js';
import { testConfig } from '../config/testConfig.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

const testType = __ENV.TEST_TYPE || 'defalt'; // Default to 'fixed_iterations' if not specified

export const options = {
    discardResponseBodies: true,
    scenarios: {
        getAllpost_scenerio: {
            executor: 'constant-vus',
            exec: 'getAllPostsTest',
            vus: 5,
            duration: '5s',
        },
        createPostTest_scenerio: {
            executor: 'constant-vus',
            exec: 'createPostTest',
            vus: 5,
            duration: '5s',
        },
        getCommentsTest_scenerio: {
            executor: 'constant-vus',
            exec: 'getCommentsTest',
            vus: 5,
            duration: '5s',
        },
        getPostDetailsTest_scenerio: {
            executor: 'constant-vus',
            exec: 'getPostDetailsTest',
            vus: 5,
            duration: '5s',
        }


    },
}


export function getAllPostsTest() {
    index.getAllPostsTest();
};

export function createPostTest() {

    index.createPostTest();
}

export function getCommentsTest() {

    index.getCommentsTest();
}

export function getPostDetailsTest() {

    index.getPostDetailsTest();
}

