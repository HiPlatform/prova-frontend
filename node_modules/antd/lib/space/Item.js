"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Item;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _ = require(".");

var spaceSize = {
  small: 8,
  middle: 16,
  large: 24
};

function Item(_ref) {
  var className = _ref.className,
      direction = _ref.direction,
      index = _ref.index,
      size = _ref.size,
      marginDirection = _ref.marginDirection,
      children = _ref.children;
  var latestIndex = React.useContext(_.LastIndexContext);

  if (children === null || children === undefined) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: index >= latestIndex ? {} : (0, _defineProperty2["default"])({}, direction === 'vertical' ? 'marginBottom' : marginDirection, typeof size === 'string' ? spaceSize[size] : size)
  }, children);
}