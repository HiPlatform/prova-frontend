import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as React from 'react';
import { LastIndexContext } from '.';
var spaceSize = {
  small: 8,
  middle: 16,
  large: 24
};
export default function Item(_ref) {
  var className = _ref.className,
      direction = _ref.direction,
      index = _ref.index,
      size = _ref.size,
      marginDirection = _ref.marginDirection,
      children = _ref.children;
  var latestIndex = React.useContext(LastIndexContext);

  if (children === null || children === undefined) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: index >= latestIndex ? {} : _defineProperty({}, direction === 'vertical' ? 'marginBottom' : marginDirection, typeof size === 'string' ? spaceSize[size] : size)
  }, children);
}