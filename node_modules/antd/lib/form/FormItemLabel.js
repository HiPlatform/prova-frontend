"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _col = _interopRequireDefault(require("../grid/col"));

var _context = require("./context");

var _LocaleReceiver = require("../locale-provider/LocaleReceiver");

var _default2 = _interopRequireDefault(require("../locale/default"));

var FormItemLabel = function FormItemLabel(_ref) {
  var prefixCls = _ref.prefixCls,
      label = _ref.label,
      htmlFor = _ref.htmlFor,
      labelCol = _ref.labelCol,
      labelAlign = _ref.labelAlign,
      colon = _ref.colon,
      required = _ref.required,
      requiredMark = _ref.requiredMark;

  var _useLocaleReceiver = (0, _LocaleReceiver.useLocaleReceiver)('Form'),
      _useLocaleReceiver2 = (0, _slicedToArray2["default"])(_useLocaleReceiver, 1),
      formLocale = _useLocaleReceiver2[0];

  if (!label) return null;
  return /*#__PURE__*/React.createElement(_context.FormContext.Consumer, {
    key: "label"
  }, function (_ref2) {
    var _classNames;

    var vertical = _ref2.vertical,
        contextLabelAlign = _ref2.labelAlign,
        contextLabelCol = _ref2.labelCol,
        contextColon = _ref2.colon;

    var _a;

    var mergedLabelCol = labelCol || contextLabelCol || {};
    var mergedLabelAlign = labelAlign || contextLabelAlign;
    var labelClsBasic = "".concat(prefixCls, "-item-label");
    var labelColClassName = (0, _classnames["default"])(labelClsBasic, mergedLabelAlign === 'left' && "".concat(labelClsBasic, "-left"), mergedLabelCol.className);
    var labelChildren = label; // Keep label is original where there should have no colon

    var computedColon = colon === true || contextColon !== false && colon !== false;
    var haveColon = computedColon && !vertical; // Remove duplicated user input colon

    if (haveColon && typeof label === 'string' && label.trim() !== '') {
      labelChildren = label.replace(/[:|：]\s*$/, '');
    } // Add required mark if optional


    if (requiredMark === 'optional' && !required) {
      labelChildren = /*#__PURE__*/React.createElement(React.Fragment, null, labelChildren, /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-item-optional")
      }, (formLocale === null || formLocale === void 0 ? void 0 : formLocale.optional) || ((_a = _default2["default"].Form) === null || _a === void 0 ? void 0 : _a.optional)));
    }

    var labelClassName = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-item-required"), required), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-item-required-mark-optional"), requiredMark === 'optional'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-item-no-colon"), !computedColon), _classNames));
    return /*#__PURE__*/React.createElement(_col["default"], (0, _extends2["default"])({}, mergedLabelCol, {
      className: labelColClassName
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: htmlFor,
      className: labelClassName,
      title: typeof label === 'string' ? label : ''
    }, labelChildren));
  });
};

var _default = FormItemLabel;
exports["default"] = _default;