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
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const react_select_1 = __importDefault(require("react-select"));
const creatable_1 = __importDefault(require("react-select/creatable"));
const Icon_1 = __importDefault(require("../../Icon"));
const MultiSelect = (_a) => {
    var props = __rest(_a, []);
    const { error, errorText, icon, id, isCreatable, isRequired, isDisabled, label, layout = 'default', selectOptions: options, onChange, placeholder, valueData = [] } = props, restProps = __rest(props, ["error", "errorText", "icon", "id", "isCreatable", "isRequired", "isDisabled", "label", "layout", "selectOptions", "onChange", "placeholder", "valueData"]);
    const [values, setValues] = (0, react_1.useState)(valueData);
    const [focus, setFocus] = (0, react_1.useState)(false);
    const SelectComponent = (isCreatable ? creatable_1.default : react_select_1.default);
    const handleOnchange = (val) => {
        // console.log({ val })
        if (onChange) {
            onChange(val, id);
            return;
        }
        const newValues = val.map((e) => e.value);
        setValues(newValues);
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
    const valueFormatter = values.map((e) => ({
        value: e,
        label: getLabel(e),
    }));
    (0, react_1.useEffect)(() => {
        setValues(valueData || []);
    }, [valueData]);
    return ((0, jsx_runtime_1.jsxs)(StyledSelectv2, { children: [!!icon && ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Icon_1.default, { iconName: icon }, void 0) }, void 0)), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(SelectComponent, Object.assign({ classNamePrefix: 'paradiseSelect' }, restProps, { id: id, isFocused: true, isMulti: true, selected: true, isDisabled: isDisabled, value: valueFormatter, placeholder: placeholder, onFocus: () => setFocus(true), onBlur: () => setFocus(false), options: optionFormatter, onChange: handleOnchange }), void 0), !!label && ((0, jsx_runtime_1.jsxs)(StyledLabel, Object.assign({ htmlFor: id }, { children: [label, " ", !!isRequired && (0, jsx_runtime_1.jsx)("span", { children: "*" }, void 0)] }), void 0)), layout === 'default' && (0, jsx_runtime_1.jsx)(StyledHr, {}, void 0)] }, void 0), !!error && ((0, jsx_runtime_1.jsx)("span", Object.assign({ style: { width: `calc(100% - ${icon && '28px'})` } }, { children: errorText }), void 0))] }, void 0));
};
exports.default = MultiSelect;
const StyledSelectv2 = styled_components_1.default.div ``;
const StyledLabel = styled_components_1.default.label `
  pointer-events: none;
  transition: all 0.2s ease;
`;
const StyledHr = styled_components_1.default.hr `
  transition: all 0.2s ease;
`;
//# sourceMappingURL=MultiSelect.js.map