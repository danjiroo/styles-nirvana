"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.iconArray = void 0;
function importAll(r) {
    return r.keys().map((r) => r.replace(/.\/|.svg/g, ''));
    // return a ReactComponent
    // return r.keys().map(r)
}
exports.iconArray = importAll(require.context('../../assets/svg/', false, /\.svg$/));
//# sourceMappingURL=IconList.js.map