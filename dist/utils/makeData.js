"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable indent */
const namor_1 = __importDefault(require("namor"));
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
        firstName: namor_1.default.generate({ words: 1, numbers: 0 }),
        lastName: namor_1.default.generate({ words: 1, numbers: 0 }),
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
//# sourceMappingURL=makeData.js.map