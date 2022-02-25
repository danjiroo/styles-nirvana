"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-explicit-any */
const react_1 = require("react");
const styles_1 = require("./styles");
const __1 = require("../");
const Input = (props) => {
    const { value, placeholder, label, actions, name, type, accessor, disabled, field_type, customTheme, iconLeft = 'search', icon, layout = 'solid', size = 'md', color = 'primary', } = props;
    const [is_input_active, setInputActive] = (0, react_1.useState)(false);
    const [is_label_click, setLabelClick] = (0, react_1.useState)(false);
    const handleInputChange = (event) => {
        var _a;
        const { value, name } = event.target;
        (_a = actions.handleChange) === null || _a === void 0 ? void 0 : _a.call(actions, { value, name, accessor });
    };
    const handleLabelClick = () => {
        setLabelClick(() => true);
    };
    const inputRef = (0, react_1.useRef)();
    (0, react_1.useEffect)(() => {
        if (is_label_click === true) {
            inputRef.current.focus();
        }
    }, [is_label_click]);
    (0, react_1.useEffect)(() => {
        if (value === '' || null || undefined) {
            setInputActive(false);
            setLabelClick(false);
        }
        if (value)
            setInputActive(true);
    }, [value]);
    const handleBlurInput = () => {
        if (value === '' || null || undefined) {
            setInputActive(false);
            setLabelClick(false);
        }
    };
    const IconLeft = iconLeft || icon;
    return ((0, jsx_runtime_1.jsxs)(styles_1.InputContainer, { children: [label && ((0, jsx_runtime_1.jsx)(styles_1.Label, Object.assign({ is_input_active: is_input_active, onClick: handleLabelClick }, { children: label }), void 0)), IconLeft && ((0, jsx_runtime_1.jsx)(styles_1.StyledIcon, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'button-icon-div' }, { children: (0, jsx_runtime_1.jsx)(__1.Icon, { iconName: IconLeft, color: layout === 'solid' ? 'light' : color, size: size }, void 0) }), void 0) }, void 0)), type && type === 'text' && ((0, jsx_runtime_1.jsx)(styles_1.StyledInput, { type: field_type, value: value, placeholder: label && is_input_active ? placeholder : placeholder, onChange: handleInputChange, onFocus: () => setInputActive(true), onClick: () => setInputActive(true), onBlur: handleBlurInput, ref: inputRef, disabled: disabled, name: name, customTheme: customTheme }, void 0))] }, void 0));
};
exports.default = Input;
