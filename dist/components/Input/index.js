"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const react_1 = require("react");
const react_mentions_1 = require("react-mentions");
const styled_components_1 = require("styled-components");
const uuid_1 = require("uuid");
const styles_1 = require("./styles");
const __1 = require("../");
const Input = (props) => {
    const { id = (0, uuid_1.v4)(), value = '', placeholder, label, actions, name, type, accessor, disabled, customTheme, iconLeft = 'search', icon, layout = 'solid', size = 'md', color = 'primary', suggestions = [], error = false, errorText = '', className, } = props;
    const [is_input_active, setInputActive] = (0, react_1.useState)(false);
    const [is_label_click, setLabelClick] = (0, react_1.useState)(false);
    const { colors } = (0, styled_components_1.useTheme)();
    const handleInputChange = (event) => {
        var _a;
        const { value, name, targetValue } = event.target;
        (_a = actions.handleChange) === null || _a === void 0 ? void 0 : _a.call(actions, { value, name, accessor });
    };
    const handleKeyDown = (event) => {
        var _a;
        (_a = actions.handleKeyDown) === null || _a === void 0 ? void 0 : _a.call(actions, event);
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
    const IconLeft = iconLeft || icon || '';
    const shouldDisplayPlaceHolder = () => {
        if (label && is_input_active)
            return placeholder;
        if (!label && !is_input_active)
            return placeholder;
        if (!label && is_input_active)
            return placeholder;
        if (!is_input_active)
            return '';
    };
    return ((0, jsx_runtime_1.jsxs)(styles_1.InputContainer, { children: [label && ((0, jsx_runtime_1.jsx)(styles_1.Label, Object.assign({ is_input_active: is_input_active, onClick: handleLabelClick, type: type }, { children: label }))), IconLeft && ((0, jsx_runtime_1.jsx)(styles_1.StyledIcon, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'button-icon-div' }, { children: (0, jsx_runtime_1.jsx)(__1.Icon, { iconName: IconLeft, color: layout === 'solid' ? 'light' : color, size: size }) })) })), type && type === 'text' && ((0, jsx_runtime_1.jsx)(styles_1.StyledInput, { type: type, value: value, placeholder: shouldDisplayPlaceHolder(), onChange: handleInputChange, onFocus: () => setInputActive(true), onClick: () => setInputActive(true), onBlur: handleBlurInput, ref: inputRef, disabled: disabled, name: name, customTheme: customTheme, className: className, onKeyDown: handleKeyDown })), type && type === 'textArea' && ((0, jsx_runtime_1.jsx)(styles_1.StyledTextArea, { value: value, placeholder: shouldDisplayPlaceHolder(), onChange: handleInputChange, onFocus: () => setInputActive(true), onClick: () => setInputActive(true), onBlur: handleBlurInput, ref: inputRef, name: name })), type && type === 'textAreaMention' && ((0, jsx_runtime_1.jsxs)(styles_1.StyledMentionsInput, Object.assign({ name: name, value: value, onChange: (e) => handleInputChange(Object.assign(Object.assign({}, e), { target: Object.assign(Object.assign({}, e.target), { name }) })), onFocus: () => setInputActive(true), onClick: () => setInputActive(true), onBlur: handleBlurInput, inputRef: inputRef, allowSpaceInQuery: true, allowSuggestionsAboveCursor: true, spellCheck: false }, { children: [(0, jsx_runtime_1.jsx)(react_mentions_1.Mention, { trigger: '@', markup: '@{{id:__id__}}:{{__display__}}', data: suggestions, appendSpaceOnAdd: true, displayTransform: (id, display) => `@${display}`, renderSuggestion: (entry, search, highlightedDisplay, index, focused) => ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: `rendered-suggestion ${focused ? 'focused' : ''}` }, { children: highlightedDisplay }))), style: {
                            background: '#cee4e5',
                        } }), (0, jsx_runtime_1.jsx)(react_mentions_1.Mention, { trigger: '#', markup: '#[[id:__id__]]:[[__display__]]', data: suggestions, appendSpaceOnAdd: true, displayTransform: (id, display) => `#${display}`, renderSuggestion: (entry, search, highlightedDisplay, index, focused) => ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: `rendered-suggestion ${focused ? 'focused' : ''}` }, { children: highlightedDisplay }))), style: {
                            background: '#cee4e5',
                        } })] }))), error && (0, jsx_runtime_1.jsx)(styles_1.StyledError, { children: errorText })] }));
};
exports.default = Input;
