import * as index from './scripts/index.js';
import { testConfig } from '../config/testConfig.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

const testType = __ENV.TEST_TYPE || 'defalt'; // Default to 'fixed_iterations' if not specified

export const options = {
    discardResponseBodies: true,
    scenarios: {
        testFunction_scenerio: {
            executor: 'constant-vus',
            exec: 'getAllPostsTest',
            vus: 5,
            duration: '5s',
        }

    },
}


export function getAllPostsTest() {
    index.getAllPostsTest();
};

