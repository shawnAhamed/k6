export const testConfig = {
    smoke: {
        executor: 'constant-vus',
        vus: 1,
        duration: '1s',
    },
    load: {
        executor: 'ramping-vus',
        stages: [
            { duration: '5m', target: 1000 }, // Ramp-up to 1000 users in 5 minutes
            { duration: '10m', target: 1000 }, // Steady-state load for 10 minutes
            { duration: '5m', target: 0 }, // Ramp-down
        ],
    },
    stress: {
        executor: 'ramping-vus',
        stages: [
            { duration: '2m', target: 500 },  // Normal load
            { duration: '3m', target: 2000 }, // Ramp-up to 2000 users
            { duration: '5m', target: 5000 }, // Peak stress at 5000 users
            { duration: '2m', target: 0 },    // Ramp-down
        ],
    },
    spike: {
        executor: 'ramping-vus',
        stages: [
            { duration: '30s', target: 100 },  // Normal traffic
            { duration: '10s', target: 5000 }, // Instant spike to 5000 users
            { duration: '5m', target: 5000 },  // Sustained high load
            { duration: '1m', target: 100 },   // Drop back to normal
        ],
    },
    soak: {
        executor: 'ramping-vus',
        stages: [
            { duration: '10m', target: 500 },  // Ramp-up
            { duration: '4h', target: 500 },   // Sustained load for 4 hours
            { duration: '10m', target: 0 },    // Ramp-down
        ],
    },
    default: {
        executor: 'constant-vus',
        vus: 1,
        duration: '1s',
    },
};