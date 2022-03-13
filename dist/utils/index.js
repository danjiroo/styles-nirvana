"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.capFirstLetterForEachWord = exports.useMediaPlayer = exports.makeData = void 0;
var makeData_1 = require("./makeData");
Object.defineProperty(exports, "makeData", { enumerable: true, get: function () { return __importDefault(makeData_1).default; } });
var useMediaEditor_1 = require("./useMediaEditor");
Object.defineProperty(exports, "useMediaPlayer", { enumerable: true, get: function () { return __importDefault(useMediaEditor_1).default; } });
const capFirstLetterForEachWord = (str = '') => str
    .toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
exports.capFirstLetterForEachWord = capFirstLetterForEachWord;
