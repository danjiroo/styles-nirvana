"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const components_1 = require("../../components");
const utils_1 = require("../../utils");
const Grid = (props) => {
    var _a;
    const { appConfig, customComponent } = props !== null && props !== void 0 ? props : {};
    const [config, setConfig] = (0, react_1.useState)({});
    const data = (0, react_1.useMemo)(() => (0, utils_1.makeData)(50), []);
    /* This is only temporary */
    const getAppConfig = () => __awaiter(void 0, void 0, void 0, function* () {
        const { data } = yield axios_1.default.get('http://localhost:4001/appconfig');
        setConfig(data);
    });
    (0, react_1.useEffect)(() => {
        getAppConfig();
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Atomic Grid [Application]" }), (0, jsx_runtime_1.jsx)("p", Object.assign({ style: { paddingBottom: 15 } }, { children: (0, jsx_runtime_1.jsx)("i", { children: "Possibly another component aside from the Table component." }) })), (0, jsx_runtime_1.jsx)(components_1.Table, { columns: (_a = appConfig === null || appConfig === void 0 ? void 0 : appConfig.columns) !== null && _a !== void 0 ? _a : [], data: data, actions: {
                    onNext: () => { },
                    onPrevious: () => { },
                    onJumpToFirst: () => { },
                    onJumpToLast: () => { },
                    onJumpToPage: () => { },
                    onChecked: () => { },
                }, options: {
                    config: {
                        showCurrentPage: appConfig === null || appConfig === void 0 ? void 0 : appConfig.showCurrentPage,
                    },
                }, customComponent: (item) => customComponent ? customComponent === null || customComponent === void 0 ? void 0 : customComponent(item) : null })] }));
};
exports.default = Grid;
