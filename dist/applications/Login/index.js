"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("../../components");
const fields_1 = require("./fields");
const Login = () => {
    const onSubmit = (data) => { };
    return (0, jsx_runtime_1.jsx)(components_1.Form, { title: 'LOGIN', onSubmit: onSubmit, fields: fields_1.fields });
};
exports.default = Login;
