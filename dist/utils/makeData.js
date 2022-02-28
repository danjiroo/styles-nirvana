"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
const range = (len) => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};
const newData = () => {
    const statusChance = Math.random();
    return {
        id: Math.floor(Math.random() * 10000),
        firstName: Math.floor(Math.random() * 10000),
        lastName: Math.floor(Math.random() * 10000),
        age: Math.floor(Math.random() * 30),
        visits: Math.floor(Math.random() * 100),
        progress: Math.floor(Math.random() * 100),
        status: statusChance > 0.66
            ? 'relationship'
            : statusChance > 0.33
                ? 'complicated'
                : 'single',
    };
};
function makeData(...lens) {
    const makeDataLevel = (depth = 0) => {
        const len = lens[depth];
        return range(len).map(() => (Object.assign(Object.assign({}, newData()), { subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined })));
    };
    return makeDataLevel();
}
exports.default = makeData;
