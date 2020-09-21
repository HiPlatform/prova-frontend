"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _rcAnimate = _interopRequireDefault(require("rc-animate"));

var _classnames = _interopRequireDefault(require("classnames"));

var _LoadingOutlined = _interopRequireDefault(require("@ant-design/icons/LoadingOutlined"));

var _PaperClipOutlined = _interopRequireDefault(require("@ant-design/icons/PaperClipOutlined"));

var _PictureTwoTone = _interopRequireDefault(require("@ant-design/icons/PictureTwoTone"));

var _FileTwoTone = _interopRequireDefault(require("@ant-design/icons/FileTwoTone"));

var _EyeOutlined = _interopRequireDefault(require("@ant-design/icons/EyeOutlined"));

var _DeleteOutlined = _interopRequireDefault(require("@ant-design/icons/DeleteOutlined"));

var _DownloadOutlined = _interopRequireDefault(require("@ant-design/icons/DownloadOutlined"));

var _reactNode = require("../_util/reactNode");

var _utils = require("./utils");

var _tooltip = _interopRequireDefault(require("../tooltip"));

var _progress = _interopRequireDefault(require("../progress"));

var _configProvider = require("../config-provider");

var _button = _interopRequireDefault(require("../button"));

var _useForceUpdate = _interopRequireDefault(require("../_util/hooks/useForceUpdate"));

var InternalUploadList = function InternalUploadList(_ref, ref) {
  var _classNames6;

  var listType = _ref.listType,
      previewFile = _ref.previewFile,
      onPreview = _ref.onPreview,
      onDownload = _ref.onDownload,
      onRemove = _ref.onRemove,
      locale = _ref.locale,
      iconRender = _ref.iconRender,
      isImgUrl = _ref.isImageUrl,
      customizePrefixCls = _ref.prefixCls,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? [] : _ref$items,
      showPreviewIcon = _ref.showPreviewIcon,
      showRemoveIcon = _ref.showRemoveIcon,
      showDownloadIcon = _ref.showDownloadIcon,
      customRemoveIcon = _ref.removeIcon,
      customDownloadIcon = _ref.downloadIcon,
      progressProps = _ref.progress,
      appendAction = _ref.appendAction;
  var forceUpdate = (0, _useForceUpdate["default"])();
  React.useEffect(function () {
    if (listType !== 'picture' && listType !== 'picture-card') {
      return;
    }

    (items || []).forEach(function (file) {
      if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File || file.originFileObj instanceof Blob) || file.thumbUrl !== undefined) {
        return;
      }

      file.thumbUrl = '';

      if (previewFile) {
        previewFile(file.originFileObj).then(function (previewDataUrl) {
          // Need append '' to avoid dead loop
          file.thumbUrl = previewDataUrl || '';
          forceUpdate();
        });
      }
    });
  }, [listType, items, previewFile]);

  var handlePreview = function handlePreview(file, e) {
    if (!onPreview) {
      return;
    }

    e.preventDefault();
    return onPreview(file);
  };

  var handleDownload = function handleDownload(file) {
    if (typeof onDownload === 'function') {
      onDownload(file);
    } else if (file.url) {
      window.open(file.url);
    }
  };

  var handleClose = function handleClose(file) {
    if (onRemove) {
      onRemove(file);
    }
  };

  var handleIconRender = function handleIconRender(file) {
    if (iconRender) {
      return iconRender(file, listType);
    }

    var isLoading = file.status === 'uploading';
    var fileIcon = isImgUrl && isImgUrl(file) ? /*#__PURE__*/React.createElement(_PictureTwoTone["default"], null) : /*#__PURE__*/React.createElement(_FileTwoTone["default"], null);
    var icon = isLoading ? /*#__PURE__*/React.createElement(_LoadingOutlined["default"], null) : /*#__PURE__*/React.createElement(_PaperClipOutlined["default"], null);

    if (listType === 'picture') {
      icon = isLoading ? /*#__PURE__*/React.createElement(_LoadingOutlined["default"], null) : fileIcon;
    } else if (listType === 'picture-card') {
      icon = isLoading ? locale.uploading : fileIcon;
    }

    return icon;
  };

  var handleActionIconRender = function handleActionIconRender(customIcon, callback, prefixCls, title) {
    var btnProps = {
      type: 'text',
      size: 'small',
      title: title,
      onClick: function onClick(e) {
        callback();

        if ((0, _reactNode.isValidElement)(customIcon) && customIcon.props.onClick) {
          customIcon.props.onClick(e);
        }
      },
      className: "".concat(prefixCls, "-list-item-card-actions-btn")
    };

    if ((0, _reactNode.isValidElement)(customIcon)) {
      var btnIcon = (0, _reactNode.cloneElement)(customIcon, (0, _extends2["default"])((0, _extends2["default"])({}, customIcon.props), {
        onClick: function onClick() {}
      }));
      return /*#__PURE__*/React.createElement(_button["default"], (0, _extends2["default"])({}, btnProps, {
        icon: btnIcon
      }));
    }

    return /*#__PURE__*/React.createElement(_button["default"], btnProps, /*#__PURE__*/React.createElement("span", null, customIcon));
  }; // Test needs


  React.useImperativeHandle(ref, function () {
    return {
      handlePreview: handlePreview,
      handleDownload: handleDownload
    };
  });

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var prefixCls = getPrefixCls('upload', customizePrefixCls);
  var list = items.map(function (file) {
    var _classNames3, _classNames4;

    var progress;
    var iconNode = handleIconRender(file);
    var icon = /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-text-icon")
    }, iconNode);

    if (listType === 'picture' || listType === 'picture-card') {
      if (file.status === 'uploading' || !file.thumbUrl && !file.url) {
        var _classNames;

        var uploadingClassName = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-list-item-thumbnail"), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-list-item-file"), file.status !== 'uploading'), _classNames));
        icon = /*#__PURE__*/React.createElement("div", {
          className: uploadingClassName
        }, iconNode);
      } else {
        var _classNames2;

        var thumbnail = isImgUrl && isImgUrl(file) ? /*#__PURE__*/React.createElement("img", {
          src: file.thumbUrl || file.url,
          alt: file.name,
          className: "".concat(prefixCls, "-list-item-image")
        }) : iconNode;
        var aClassName = (0, _classnames["default"])((_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-list-item-thumbnail"), true), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-list-item-file"), isImgUrl && !isImgUrl(file)), _classNames2));
        icon = /*#__PURE__*/React.createElement("a", {
          className: aClassName,
          onClick: function onClick(e) {
            return handlePreview(file, e);
          },
          href: file.url || file.thumbUrl,
          target: "_blank",
          rel: "noopener noreferrer"
        }, thumbnail);
      }
    }

    if (file.status === 'uploading') {
      // show loading icon if upload progress listener is disabled
      var loadingProgress = 'percent' in file ? /*#__PURE__*/React.createElement(_progress["default"], (0, _extends2["default"])({}, progressProps, {
        type: "line",
        percent: file.percent
      })) : null;
      progress = /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-list-item-progress"),
        key: "progress"
      }, loadingProgress);
    }

    var infoUploadingClass = (0, _classnames["default"])((_classNames3 = {}, (0, _defineProperty2["default"])(_classNames3, "".concat(prefixCls, "-list-item"), true), (0, _defineProperty2["default"])(_classNames3, "".concat(prefixCls, "-list-item-").concat(file.status), true), (0, _defineProperty2["default"])(_classNames3, "".concat(prefixCls, "-list-item-list-type-").concat(listType), true), _classNames3));
    var linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
    var removeIcon = showRemoveIcon ? handleActionIconRender(customRemoveIcon || /*#__PURE__*/React.createElement(_DeleteOutlined["default"], null), function () {
      return handleClose(file);
    }, prefixCls, locale.removeFile) : null;
    var downloadIcon = showDownloadIcon && file.status === 'done' ? handleActionIconRender(customDownloadIcon || /*#__PURE__*/React.createElement(_DownloadOutlined["default"], null), function () {
      return handleDownload(file);
    }, prefixCls, locale.downloadFile) : null;
    var downloadOrDelete = listType !== 'picture-card' && /*#__PURE__*/React.createElement("span", {
      key: "download-delete",
      className: "".concat(prefixCls, "-list-item-card-actions ").concat(listType === 'picture' ? 'picture' : '')
    }, downloadIcon, removeIcon);
    var listItemNameClass = (0, _classnames["default"])((_classNames4 = {}, (0, _defineProperty2["default"])(_classNames4, "".concat(prefixCls, "-list-item-name"), true), (0, _defineProperty2["default"])(_classNames4, "".concat(prefixCls, "-list-item-name-icon-count-").concat([downloadIcon, removeIcon].filter(function (x) {
      return x;
    }).length), true), _classNames4));
    var preview = file.url ? [/*#__PURE__*/React.createElement("a", (0, _extends2["default"])({
      key: "view",
      target: "_blank",
      rel: "noopener noreferrer",
      className: listItemNameClass,
      title: file.name
    }, linkProps, {
      href: file.url,
      onClick: function onClick(e) {
        return handlePreview(file, e);
      }
    }), file.name), downloadOrDelete] : [/*#__PURE__*/React.createElement("span", {
      key: "view",
      className: listItemNameClass,
      onClick: function onClick(e) {
        return handlePreview(file, e);
      },
      title: file.name
    }, file.name), downloadOrDelete];
    var style = {
      pointerEvents: 'none',
      opacity: 0.5
    };
    var previewIcon = showPreviewIcon ? /*#__PURE__*/React.createElement("a", {
      href: file.url || file.thumbUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      style: file.url || file.thumbUrl ? undefined : style,
      onClick: function onClick(e) {
        return handlePreview(file, e);
      },
      title: locale.previewFile
    }, /*#__PURE__*/React.createElement(_EyeOutlined["default"], null)) : null;
    var actions = listType === 'picture-card' && file.status !== 'uploading' && /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-list-item-actions")
    }, previewIcon, file.status === 'done' && downloadIcon, removeIcon);
    var message;

    if (file.response && typeof file.response === 'string') {
      message = file.response;
    } else {
      message = file.error && file.error.statusText || locale.uploadError;
    }

    var iconAndPreview = /*#__PURE__*/React.createElement("span", null, icon, preview);
    var dom = /*#__PURE__*/React.createElement("div", {
      className: infoUploadingClass
    }, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-list-item-info")
    }, iconAndPreview), actions, /*#__PURE__*/React.createElement(_rcAnimate["default"], {
      transitionName: "fade",
      component: ""
    }, progress));
    var listContainerNameClass = (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-list-picture-card-container"), listType === 'picture-card'));
    return /*#__PURE__*/React.createElement("div", {
      key: file.uid,
      className: listContainerNameClass
    }, file.status === 'error' ? /*#__PURE__*/React.createElement(_tooltip["default"], {
      title: message,
      getPopupContainer: function getPopupContainer(node) {
        return node.parentNode;
      }
    }, dom) : /*#__PURE__*/React.createElement("span", null, dom));
  });
  var listClassNames = (0, _classnames["default"])((_classNames6 = {}, (0, _defineProperty2["default"])(_classNames6, "".concat(prefixCls, "-list"), true), (0, _defineProperty2["default"])(_classNames6, "".concat(prefixCls, "-list-").concat(listType), true), (0, _defineProperty2["default"])(_classNames6, "".concat(prefixCls, "-list-rtl"), direction === 'rtl'), _classNames6));
  var animationDirection = listType === 'picture-card' ? 'animate-inline' : 'animate';
  var transitionName = list.length === 0 ? '' : "".concat(prefixCls, "-").concat(animationDirection);
  return /*#__PURE__*/React.createElement(_rcAnimate["default"], {
    transitionName: transitionName,
    component: "div",
    className: listClassNames
  }, list, /*#__PURE__*/React.isValidElement(appendAction) ? /*#__PURE__*/React.cloneElement(appendAction, {
    key: 'appendAction'
  }) : appendAction);
};

var UploadList = /*#__PURE__*/React.forwardRef(InternalUploadList);
UploadList.displayName = 'UploadList';
UploadList.defaultProps = {
  listType: 'text',
  progress: {
    strokeWidth: 2,
    showInfo: false
  },
  showRemoveIcon: true,
  showDownloadIcon: false,
  showPreviewIcon: true,
  previewFile: _utils.previewImage,
  isImageUrl: _utils.isImageUrl
};
var _default = UploadList;
exports["default"] = _default;