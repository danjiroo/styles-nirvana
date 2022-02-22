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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const __1 = require("../");
const __2 = require("../");
const styles_1 = require("./styles");
const __3 = require("../");
const Form = (props) => {
    const { onSubmit, fields } = props;
    const submitting = false;
    const [state, setState] = (0, react_1.useState)({});
    const actionsProp = {
        handleChange: (data) => {
            const { name, value } = data;
            console.log('value:', data);
            setState((prev) => (Object.assign(Object.assign({}, prev), { [name]: value })));
        },
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit && onSubmit(state);
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(__1.Modifiers, {}, void 0), (0, jsx_runtime_1.jsxs)(styles_1.StyledForm, Object.assign({ onSubmit: handleSubmit }, { children: [submitting && (0, jsx_runtime_1.jsx)("p", { children: "just a moment" }, void 0), fields &&
                        Object.entries(fields).map(([key, value], index) => {
                            var _a;
                            return ((0, jsx_runtime_1.jsx)(__2.Input, { value: (_a = state[key]) !== null && _a !== void 0 ? _a : '', type: 'text', field_type: value.field_type, placeholder: value.place_holder, label: value.label, actions: actionsProp !== null && actionsProp !== void 0 ? actionsProp : {}, name: value.name, accessor: 'value', disabled: submitting, iconLeft: value.icon ? value.icon : '' }, `key--${index}`));
                        }), (0, jsx_runtime_1.jsx)(__3.Button, { onClick: handleSubmit, label: 'Submit' }, void 0)] }), void 0)] }, void 0));
};
exports.default = react_1.default.memo(Form);
