"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconObject = exports.iconArray = void 0;
function importAll(r) {
    return r.keys().map((r) => r.replace(/.\/|.svg/g, ''));
}
function importAllAsObject(r) {
    return r.keys().reduce((acc, r) => {
        const replaced = r.replace(/.\/|.svg/g, '');
        return Object.assign(Object.assign({}, acc), { [replaced]: replaced });
    }, {});
}
exports.iconArray = importAll(require.context('../../assets/svg/', false, /\.svg$/));
exports.iconObject = importAllAsObject(require.context('../../assets/svg/', false, /\.svg$/));
