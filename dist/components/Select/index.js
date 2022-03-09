"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const react_1 = require("react");
const styled_components_1 = require("styled-components");
const react_select_1 = __importDefault(require("react-select"));
const creatable_1 = __importDefault(require("react-select/creatable"));
const __1 = require("..");
const styles_1 = require("./styles");
const SingleSelect = (_a) => {
    var { error, errorText, icon, name, isCreatable = false, isDisabled = false, isRequired = false, isLoading = false, label, selectOptions: options, handleChange, placeholder, valueData = '', isMulti = false, rounded = false, color = 'primary', colorWeight = '200', size = 'xl' } = _a, restProps = __rest(_a, ["error", "errorText", "icon", "name", "isCreatable", "isDisabled", "isRequired", "isLoading", "label", "selectOptions", "handleChange", "placeholder", "valueData", "isMulti", "rounded", "color", "colorWeight", "size"]);
    const styleProps = {
        error,
        label,
        icon,
        size,
    };
    const { colors } = (0, styled_components_1.useTheme)();
    const [value, setValue] = (0, react_1.useState)(valueData);
    const [focus, setFocus] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setValue(valueData);
    }, [valueData]);
    const SelectComponent = (isCreatable ? creatable_1.default : react_select_1.default);
    const handleOnchange = (changes) => {
        if (handleChange) {
            handleChange({
                target: {
                    name,
                    value: changes !== null && changes !== void 0 ? changes : '',
                },
            });
            return;
        }
        setValue(changes.value);
    };
    const labelKey = restProps.labelKey || 'label';
    const valueKey = restProps.valueKey || 'id';
    const getLabel = (e) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const label = options.find((r) => {
            if (typeof r === 'string') {
                return r === e;
            }
            return e === r[valueKey];
        });
        if (label && typeof label === 'object') {
            return label[labelKey];
        }
        else if (label && typeof label === 'string') {
            return label;
        }
        return e;
    };
    const optionFormatter = options.map((e) => {
        if (typeof e === 'string' || typeof e === 'number') {
            return {
                label: e,
                value: e,
            };
        }
        return {
            label: e[labelKey],
            value: e[valueKey],
            data: e,
        };
    });
    const valueFormatter = value && (typeof value === 'string' || typeof value === 'number')
        ? {
            value,
            label: getLabel(value),
        }
        : value;
    const colorStyles = {
        // multiValue: (styles) => ({
        //   ...styles,
        //   backgroundColor: colors.primary.light,
        // }),
        // multiValueLabel: (styles) => ({
        //   ...styles,
        //   color: colors.primary.dark,
        // }),
        option: (styles, { data, isDisabled, isFocused, isSelected }) => (Object.assign(Object.assign({}, styles), { color: isDisabled
                ? colors.dark[50]
                : isSelected
                    ? colors.light[100]
                    : colors.dark[100], backgroundColor: isDisabled
                ? undefined
                : isSelected
                    ? colors === null || colors === void 0 ? void 0 : colors[color][colorWeight]
                    : undefined, ':active': Object.assign(Object.assign({}, styles[':active']), { color: isDisabled
                    ? undefined
                    : isSelected
                        ? colors.light[100]
                        : colors.light[100], backgroundColor: isDisabled
                    ? undefined
                    : isSelected
                        ? colors === null || colors === void 0 ? void 0 : colors[color][colorWeight]
                        : colors === null || colors === void 0 ? void 0 : colors[color][colorWeight] }) })),
        multiValueRemove: (styles) => (Object.assign(Object.assign({}, styles), { ':hover': {
                backgroundColor: colors === null || colors === void 0 ? void 0 : colors[color][colorWeight],
                color: 'white',
            } })),
        input: (styles) => (Object.assign(Object.assign({}, styles), { color: colors.dark[100] })),
        placeholder: (styles) => (Object.assign(Object.assign({}, styles), { color: colors.dark[100] })),
        singleValue: (styles) => (Object.assign(Object.assign({}, styles), { color: colors.dark[100] })),
        multiValue: (styles) => (Object.assign(Object.assign({}, styles), { color: colors.dark[100] })),
        multiValueLabel: (styles) => (Object.assign(Object.assign({}, styles), { color: colors.dark[100] })),
    };
    return ((0, jsx_runtime_1.jsxs)(styles_1.StyledSelectContainer, Object.assign({}, styleProps, { children: [!!icon && ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'select-icon-container' }, { children: (0, jsx_runtime_1.jsx)(__1.Icon, { iconName: icon, color: 'dark' }, void 0) }), void 0)), (0, jsx_runtime_1.jsxs)(styles_1.StyledField, Object.assign({}, styleProps, { children: [!!label && ((0, jsx_runtime_1.jsxs)("label", Object.assign({ className: 'select-label' }, { children: [label, " ", !!isRequired && (0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'select-required' }, { children: "*" }), void 0)] }), void 0)), (0, jsx_runtime_1.jsx)(SelectComponent, Object.assign({}, restProps, { className: 'select-component', selected: true, isDisabled: isDisabled, isLoading: isLoading, isFocused: true, isMulti: isMulti, value: valueFormatter, placeholder: placeholder, onFocus: () => setFocus(true), onBlur: () => setFocus(false), options: optionFormatter, onChange: handleOnchange, styles: colorStyles, theme: (theme) => (Object.assign(Object.assign({}, theme), { borderRadius: rounded ? 8 : 0, colors: Object.assign(Object.assign({}, theme.colors), { primary25: colors === null || colors === void 0 ? void 0 : colors[color][colorWeight], primary: colors === null || colors === void 0 ? void 0 : colors[color][colorWeight] }) })) }), void 0), !!error && ((0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'select-error', style: { width: `calc(100% - ${icon && '28px'})` } }, { children: errorText }), void 0))] }), void 0)] }), void 0));
};
exports.default = SingleSelect;
