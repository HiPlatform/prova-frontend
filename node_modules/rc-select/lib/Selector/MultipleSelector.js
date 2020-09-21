"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _pickAttrs = _interopRequireDefault(require("rc-util/lib/pickAttrs"));

var _rcMotion = require("rc-motion");

var _TransBtn = _interopRequireDefault(require("../TransBtn"));

var _Input = _interopRequireDefault(require("./Input"));

var _useLayoutEffect = _interopRequireDefault(require("../hooks/useLayoutEffect"));

var REST_TAG_KEY = '__RC_SELECT_MAX_REST_COUNT__';

var SelectSelector = function SelectSelector(props) {
  var id = props.id,
      prefixCls = props.prefixCls,
      values = props.values,
      open = props.open,
      searchValue = props.searchValue,
      inputRef = props.inputRef,
      placeholder = props.placeholder,
      disabled = props.disabled,
      mode = props.mode,
      showSearch = props.showSearch,
      autoFocus = props.autoFocus,
      autoComplete = props.autoComplete,
      accessibilityIndex = props.accessibilityIndex,
      tabIndex = props.tabIndex,
      removeIcon = props.removeIcon,
      choiceTransitionName = props.choiceTransitionName,
      maxTagCount = props.maxTagCount,
      maxTagTextLength = props.maxTagTextLength,
      _props$maxTagPlacehol = props.maxTagPlaceholder,
      maxTagPlaceholder = _props$maxTagPlacehol === void 0 ? function (omittedValues) {
    return "+ ".concat(omittedValues.length, " ...");
  } : _props$maxTagPlacehol,
      tagRender = props.tagRender,
      onSelect = props.onSelect,
      onInputChange = props.onInputChange,
      onInputPaste = props.onInputPaste,
      onInputKeyDown = props.onInputKeyDown,
      onInputMouseDown = props.onInputMouseDown,
      onInputCompositionStart = props.onInputCompositionStart,
      onInputCompositionEnd = props.onInputCompositionEnd;

  var _React$useState = React.useState(false),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      motionAppear = _React$useState2[0],
      setMotionAppear = _React$useState2[1];

  var measureRef = React.useRef(null);

  var _React$useState3 = React.useState(0),
      _React$useState4 = (0, _slicedToArray2.default)(_React$useState3, 2),
      inputWidth = _React$useState4[0],
      setInputWidth = _React$useState4[1]; // ===================== Motion ======================


  React.useEffect(function () {
    setMotionAppear(true);
  }, []); // ===================== Search ======================

  var inputValue = open || mode === 'tags' ? searchValue : '';
  var inputEditable = mode === 'tags' || open && showSearch; // We measure width and set to the input immediately

  (0, _useLayoutEffect.default)(function () {
    setInputWidth(measureRef.current.scrollWidth);
  }, [inputValue]); // ==================== Selection ====================

  var displayValues = values; // Cut by `maxTagCount`

  var restCount;

  if (typeof maxTagCount === 'number') {
    restCount = values.length - maxTagCount;
    displayValues = values.slice(0, maxTagCount);
  } // Update by `maxTagTextLength`


  if (typeof maxTagTextLength === 'number') {
    displayValues = displayValues.map(function (_ref) {
      var label = _ref.label,
          rest = (0, _objectWithoutProperties2.default)(_ref, ["label"]);
      var displayLabel = label;

      if (typeof label === 'string' || typeof label === 'number') {
        var strLabel = String(displayLabel);

        if (strLabel.length > maxTagTextLength) {
          displayLabel = "".concat(strLabel.slice(0, maxTagTextLength), "...");
        }
      }

      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, rest), {}, {
        label: displayLabel
      });
    });
  } // Fill rest


  if (restCount > 0) {
    displayValues.push({
      key: REST_TAG_KEY,
      label: typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(values.slice(maxTagCount)) : maxTagPlaceholder
    });
  }

  var selectionNode = React.createElement(_rcMotion.CSSMotionList, {
    component: false,
    keys: displayValues,
    motionName: choiceTransitionName,
    motionAppear: motionAppear
  }, function (_ref2) {
    var key = _ref2.key,
        label = _ref2.label,
        value = _ref2.value,
        itemDisabled = _ref2.disabled,
        className = _ref2.className,
        style = _ref2.style;
    var mergedKey = key || value;
    var closable = key !== REST_TAG_KEY && !itemDisabled;

    var onMouseDown = function onMouseDown(event) {
      event.preventDefault();
      event.stopPropagation();
    };

    var onClose = function onClose(event) {
      if (event) event.stopPropagation();
      onSelect(value, {
        selected: false
      });
    };

    return typeof tagRender === 'function' ? React.createElement("span", {
      key: mergedKey,
      onMouseDown: onMouseDown,
      className: className,
      style: style
    }, tagRender({
      label: label,
      value: value,
      disabled: itemDisabled,
      closable: closable,
      onClose: onClose
    })) : React.createElement("span", {
      key: mergedKey,
      className: (0, _classnames.default)(className, "".concat(prefixCls, "-selection-item"), (0, _defineProperty2.default)({}, "".concat(prefixCls, "-selection-item-disabled"), itemDisabled)),
      style: style
    }, React.createElement("span", {
      className: "".concat(prefixCls, "-selection-item-content")
    }, label), closable && React.createElement(_TransBtn.default, {
      className: "".concat(prefixCls, "-selection-item-remove"),
      onMouseDown: onMouseDown,
      onClick: onClose,
      customizeIcon: removeIcon
    }, "\xD7"));
  });
  return React.createElement(React.Fragment, null, selectionNode, React.createElement("span", {
    className: "".concat(prefixCls, "-selection-search"),
    style: {
      width: inputWidth
    }
  }, React.createElement(_Input.default, {
    ref: inputRef,
    open: open,
    prefixCls: prefixCls,
    id: id,
    inputElement: null,
    disabled: disabled,
    autoFocus: autoFocus,
    autoComplete: autoComplete,
    editable: inputEditable,
    accessibilityIndex: accessibilityIndex,
    value: inputValue,
    onKeyDown: onInputKeyDown,
    onMouseDown: onInputMouseDown,
    onChange: onInputChange,
    onPaste: onInputPaste,
    onCompositionStart: onInputCompositionStart,
    onCompositionEnd: onInputCompositionEnd,
    tabIndex: tabIndex,
    attrs: (0, _pickAttrs.default)(props, true)
  }), React.createElement("span", {
    ref: measureRef,
    className: "".concat(prefixCls, "-selection-search-mirror"),
    "aria-hidden": true
  }, inputValue, "\xA0")), !values.length && !inputValue && React.createElement("span", {
    className: "".concat(prefixCls, "-selection-placeholder")
  }, placeholder));
};

var _default = SelectSelector;
exports.default = _default;