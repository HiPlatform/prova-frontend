"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LastIndexContext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

var _configProvider = require("../config-provider");

var _Item = _interopRequireDefault(require("./Item"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var LastIndexContext = /*#__PURE__*/React.createContext(0);
exports.LastIndexContext = LastIndexContext;

var Space = function Space(props) {
  var _classNames;

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      space = _React$useContext.space,
      directionConfig = _React$useContext.direction;

  var _props$size = props.size,
      size = _props$size === void 0 ? (space === null || space === void 0 ? void 0 : space.size) || 'small' : _props$size,
      align = props.align,
      className = props.className,
      children = props.children,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
      customizePrefixCls = props.prefixCls,
      otherProps = __rest(props, ["size", "align", "className", "children", "direction", "prefixCls"]);

  var childNodes = (0, _toArray["default"])(children, {
    keepEmpty: true
  });

  if (childNodes.length === 0) {
    return null;
  }

  var mergedAlign = align === undefined && direction === 'horizontal' ? 'center' : align;
  var prefixCls = getPrefixCls('space', customizePrefixCls);
  var cn = (0, _classnames["default"])(prefixCls, "".concat(prefixCls, "-").concat(direction), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), directionConfig === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-align-").concat(mergedAlign), mergedAlign), _classNames), className);
  var itemClassName = "".concat(prefixCls, "-item");
  var marginDirection = directionConfig === 'rtl' ? 'marginLeft' : 'marginRight'; // Calculate latest one

  var latestIndex = 0;
  var nodes = childNodes.map(function (child, i) {
    if (child !== null && child !== undefined) {
      latestIndex = i;
    }
    /* eslint-disable react/no-array-index-key */


    return /*#__PURE__*/React.createElement(_Item["default"], {
      className: itemClassName,
      key: "".concat(itemClassName, "-").concat(i),
      direction: direction,
      size: size,
      index: i,
      marginDirection: marginDirection
    }, child);
    /* eslint-enable */
  });
  return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
    className: cn
  }, otherProps), /*#__PURE__*/React.createElement(LastIndexContext.Provider, {
    value: latestIndex
  }, nodes));
};

var _default = Space;
exports["default"] = _default;