"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("../../components");
const fields_1 = require("./fields");
const components_2 = require("../../components");
const Login = () => {
    const onSubmit = (data) => {
        console.log('On Submit:', data);
    };
    return ((0, jsx_runtime_1.jsx)(components_2.Container, Object.assign({ size: 'lg' }, { children: (0, jsx_runtime_1.jsx)(components_1.Form, { title: 'LOGIN', onSubmit: onSubmit, fields: fields_1.fields }, void 0) }), void 0));
};
exports.default = Login;
