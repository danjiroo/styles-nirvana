"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledProgress = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.StyledProgress = styled_components_1.default.div `
  background: #fff;
  width: 100%;
  max-width: 250px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  margin-top: 50px;

  &:hover {
    transform: scale(1.1);
    z-index: 1;
  }

  .percent {
    width: 150px;
    height: 150px;
    position: relative;
  }

  .percent svg {
    width: 150px;
    height: 150px;
    position: relative;
  }

  .percent svg circle {
    width: 150px;
    height: 150px;
    fill: none;
    stroke-width: 10;
    stroke: #000;
    transform: translate(5px, 5px);
    stroke-dasharray: 440;
    stroke-dashoffset: 440;
    stroke-linecap: round;
  }

  .percent svg circle:nth-child(1) {
    stroke-dashoffset: 0;
    stroke: #f3f3f3;
  }

  .percent svg circle:nth-child(2) {
    stroke-dashoffset: calc(
      440 - (440 * ${({ progress = 0 }) => progress}) / 100
    );
    stroke: #03a9f4;
  }

  .percent .num {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    color: #111;
  }

  .percent .num h2 {
    font-size: 48px;
  }

  .percent .num h2 span {
    font-size: 24px;
  }

  .text {
    padding: 10px 0 0;
    color: #999;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;
//# sourceMappingURL=styles.js.map