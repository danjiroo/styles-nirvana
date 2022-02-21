"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iterateDelay = exports.transformCalc = exports.leftCalc = exports.topCalc = void 0;
function topCalc(rayWidth) {
    if (rayWidth)
        return `${String(rayWidth / 2) + 'px'}`;
    return;
}
exports.topCalc = topCalc;
function leftCalc(size, rayWidth) {
    if (size && rayWidth) {
        const halfSize = size / 2;
        const halfRayWidth = rayWidth / 2;
        return `${String(halfSize - halfRayWidth) + 'px'}`;
    }
    return;
}
exports.leftCalc = leftCalc;
function transformCalc(size) {
    if (size) {
        const halfSize = String(size / 2);
        return `${halfSize}px ${halfSize}px`;
    }
    return;
}
exports.transformCalc = transformCalc;
function iterateDelay(idx, n) {
    const i = idx / 10;
    const a = n + i;
    const b = n + 1.1;
    const res = a - b;
    return Math.round((res + Number.EPSILON) * 100) / 100;
}
exports.iterateDelay = iterateDelay;
