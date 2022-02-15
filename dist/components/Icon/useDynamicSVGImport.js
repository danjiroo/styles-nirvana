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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDynamicSVGImport = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const react_1 = require("react");
function useDynamicSVGImport(iconName, options = {}) {
    const ImportedIconRef = (0, react_1.useRef)();
    const [loading, setLoading] = (0, react_1.useState)(false);
    const [error, setError] = (0, react_1.useState)();
    const { onCompleted, onError } = options;
    (0, react_1.useEffect)(() => {
        setLoading(true);
        const importIcon = () => __awaiter(this, void 0, void 0, function* () {
            try {
                ImportedIconRef.current = (yield Promise.resolve().then(() => __importStar(require(`../../assets/svg/${iconName}.svg`)))).ReactComponent;
                onCompleted === null || onCompleted === void 0 ? void 0 : onCompleted(iconName, ImportedIconRef.current);
            }
            catch (err) {
                onError === null || onError === void 0 ? void 0 : onError(err);
                setError(err);
            }
            finally {
                setLoading(false);
            }
        });
        importIcon();
    }, [iconName, onCompleted, onError]);
    return { error, loading, SvgIcon: ImportedIconRef.current };
}
exports.useDynamicSVGImport = useDynamicSVGImport;
//# sourceMappingURL=useDynamicSVGImport.js.map