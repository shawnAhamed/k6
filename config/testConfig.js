export const testConfig = {
    smoke: {
        vus: 1,
        duration: '1s',
    },
    load: {
        stages: [
            { duration: '2m', target: 10 }, // ramp-up to 10 users
            { duration: '3h56m', target: 10 }, // stay at 10 users for ~4 hours
            { duration: '2m', target: 0 }, // ramp-down to 0 users
        ],
    },
    stress: {
        stages: [
            { duration: '2m', target: 100 }, // ramp-up to 100 users
            { duration: '5m', target: 100 }, // stay at 100 users for 5 minutes
            { duration: '2m', target: 200 }, // ramp-up to 200 users
            { duration: '5m', target: 200 }, // stay at 200 users for 5 minutes
            { duration: '2m', target: 300 }, // ramp-up to 300 users
            { duration: '5m', target: 300 }, // stay at 300 users for 5 minutes
            { duration: '2m', target: 0 }, // ramp-down to 0 users
        ],
    },
    spike: {
        stages: [
            { duration: '10s', target: 100 }, // spike to 100 users
            { duration: '1m', target: 100 }, // stay at 100 users for 1 minute
            { duration: '10s', target: 0 }, // ramp-down to 0 users
        ],
    },
    soak: {
        stages: [
            { duration: '2m', target: 10 }, // ramp-up to 10 users
            { duration: '3h56m', target: 10 }, // stay at 10 users for ~4 hours
            { duration: '2m', target: 0 }, // ramp-down to 0 users
        ],
    },
    defalt: {
        vus: 1,
        duration: '1s',
    },
};