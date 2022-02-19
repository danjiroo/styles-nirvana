"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-explicit-any */
const react_1 = require("react");
const react_flow_renderer_1 = __importStar(require("react-flow-renderer"));
const initialElements_1 = __importDefault(require("./initialElements"));
// ! Types here are temporary, since this Component is just an example
const onLoad = (reactFlowInstance) => {
    console.log('Flow loaded:', reactFlowInstance);
    reactFlowInstance.fitView();
};
const OverviewFlow = () => {
    const [elements, setElements] = (0, react_1.useState)(initialElements_1.default);
    const onElementsRemove = (elementsToRemove) => setElements((els) => (0, react_flow_renderer_1.removeElements)(elementsToRemove, els));
    const onConnect = (params) => setElements((els) => (0, react_flow_renderer_1.addEdge)(params, els));
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsxs)(react_flow_renderer_1.default, Object.assign({ elements: elements, onElementsRemove: onElementsRemove, onConnect: onConnect, onLoad: onLoad, snapToGrid: true, snapGrid: [15, 15], style: { height: '100vh' } }, { children: [(0, jsx_runtime_1.jsx)(react_flow_renderer_1.MiniMap, { nodeStrokeColor: (n) => {
                        var _a;
                        if ((_a = n.style) === null || _a === void 0 ? void 0 : _a.background)
                            return n.style.background;
                        if (n.type === 'input')
                            return '#0041d0';
                        if (n.type === 'output')
                            return '#ff0072';
                        if (n.type === 'default')
                            return '#1a192b';
                        return '#eee';
                    }, nodeColor: (n) => {
                        var _a;
                        if ((_a = n.style) === null || _a === void 0 ? void 0 : _a.background)
                            return n.style.background;
                        return '#fff';
                    }, nodeBorderRadius: 2 }, void 0), (0, jsx_runtime_1.jsx)(react_flow_renderer_1.Controls, {}, void 0), (0, jsx_runtime_1.jsx)(react_flow_renderer_1.Background, { color: '#aaa', gap: 16 }, void 0)] }), void 0) }, void 0));
};
exports.default = OverviewFlow;
