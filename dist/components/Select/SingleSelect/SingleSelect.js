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
/* eslint-disable no-use-before-define */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const react_select_1 = __importDefault(require("react-select"));
const creatable_1 = __importDefault(require("react-select/creatable"));
const SingleSelect = (_a) => {
    var props = __rest(_a, []);
    const { error, errorText, icon, id, name, isCreatable, isDisabled, isRequired, label, layout = 'default', selectOptions: options, onChange, placeholder, valueData = '', isMulti = false } = props, restProps = __rest(props, ["error", "errorText", "icon", "id", "name", "isCreatable", "isDisabled", "isRequired", "label", "layout", "selectOptions", "onChange", "placeholder", "valueData", "isMulti"]);
    const [value, setValue] = (0, react_1.useState)(valueData);
    const [focus, setFocus] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setValue(valueData);
    }, [valueData]);
    const SelectComponent = (isCreatable ? creatable_1.default : react_select_1.default);
    const handleOnchange = (changes) => {
        if (onChange) {
            onChange({
                target: {
                    name,
                    value: changes === null || changes === void 0 ? void 0 : changes.value,
                },
            });
            return;
        }
        setValue(changes);
    };
    const labelKey = props.labelKey || 'label';
    const valueKey = props.valueKey || 'id';
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
        if (typeof e === 'string') {
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
    return ((0, jsx_runtime_1.jsx)(StyledSelectContainer, { children: (0, jsx_runtime_1.jsxs)(StyledField, { children: [!!label && ((0, jsx_runtime_1.jsxs)(StyledLabel, Object.assign({ htmlFor: id }, { children: [label, " ", !!isRequired && (0, jsx_runtime_1.jsx)("span", { children: "*" }, void 0)] }), void 0)), (0, jsx_runtime_1.jsx)(SelectComponent, Object.assign({}, restProps, { id: id, selected: true, isDisabled: isDisabled, isFocused: true, isMulti: isMulti, value: valueFormatter, placeholder: placeholder, onFocus: () => setFocus(true), onBlur: () => setFocus(false), options: optionFormatter, onChange: handleOnchange }), void 0), !!error && ((0, jsx_runtime_1.jsx)(StyledError, Object.assign({ style: { width: `calc(100% - ${icon && '28px'})` } }, { children: errorText }), void 0))] }, void 0) }, void 0));
};
exports.default = SingleSelect;
const StyledSelectContainer = styled_components_1.default.div `
  margin-top: 10px;
`;
const StyledField = styled_components_1.default.div `
  position: relative;
  padding-left: ${({ icon }) => (icon ? 5 : 0)}px;
  width: 100%;
`;
const StyledLabel = styled_components_1.default.label `
  transition: all 0.2s ease;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
`;
const StyledError = styled_components_1.default.span `
  color: ${({ theme }) => theme.colors.danger.DEFAULT};
  font-size: 12px;
`;
//# sourceMappingURL=SingleSelect.js.map