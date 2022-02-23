"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
const react_1 = require("react");
const styles_1 = require("./styles");
const useDynamicSVGImport_1 = require("./useDynamicSVGImport");
// import { ReactComponent as TestSVG } from '../../assets/svg/mail.svg'
const Icon = ({ color = 'primary', iconName = 'activity', size = 'md', hoverable = false, }) => {
    const onCompleted = (0, react_1.useCallback)((data) => { }, []);
    const onError = (0, react_1.useCallback)(() => { }, []);
    const { error, loading, SvgIcon } = (0, useDynamicSVGImport_1.useDynamicSVGImport)(iconName, {
        onCompleted,
        onError,
    });
    const SVGComponent = require(`../../assets/svg/${iconName}.svg`).ReactComponent;
    // let SVGComponent: any = null
    // useEffect(() => {
    //   const getIcon = async () => {
    //     SVGComponent = await require(`../../assets/svg/${iconName}.svg`)
    //       .ReactComponent
    //   }
    //   getIcon()
    // }, [iconName])
    return ((0, jsx_runtime_1.jsx)(styles_1.StyledIconDiv, Object.assign({ size: size, color: color, hoverable: hoverable }, { children: (0, jsx_runtime_1.jsx)(SVGComponent, {}, void 0) }), void 0));
};
exports.default = Icon;
