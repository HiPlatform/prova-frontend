import _extends from "@babel/runtime/helpers/extends";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import * as React from 'react';
import RcImage from 'rc-image';
import { ConfigContext } from '../config-provider';

var Image = function Image(_a) {
  var customizePrefixCls = _a.prefixCls,
      otherProps = __rest(_a, ["prefixCls"]);

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('image', customizePrefixCls);
  return /*#__PURE__*/React.createElement(RcImage, _extends({
    prefixCls: prefixCls
  }, otherProps));
};

export default Image;