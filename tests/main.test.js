import * as index from './scripts/index.js';
import { testConfig } from '../config/testConfig.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

const testType = __ENV.TEST_TYPE || 'default'; 
console.log(`Running test type: ${JSON.stringify(testConfig[testType])}`);

export const options = {
    discardResponseBodies: true,
    scenarios: {
        getAllpost_scenerio: {
            exec: 'getAllPostsTest',
            ...testConfig[testType]

        },
        createPostTest_scenerio: {
            exec: 'createPostTest',
            ...testConfig[testType]

        },
        getCommentsTest_scenerio: {
            exec: 'getCommentsTest',
            ...testConfig[testType]

        },
        getPostDetailsTest_scenerio: {
            exec: 'getPostDetailsTest',
            ...testConfig[testType]

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

export function handleSummary(data) {
    return {
        'reports/summary.html': htmlReport(data),
    };
}