import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _extends from "@babel/runtime/helpers/extends";
import * as React from 'react';
import Animate from 'rc-animate';
import classNames from 'classnames';
import LoadingOutlined from '@ant-design/icons/LoadingOutlined';
import PaperClipOutlined from '@ant-design/icons/PaperClipOutlined';
import PictureTwoTone from '@ant-design/icons/PictureTwoTone';
import FileTwoTone from '@ant-design/icons/FileTwoTone';
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined';
import DownloadOutlined from '@ant-design/icons/DownloadOutlined';
import { cloneElement, isValidElement } from '../_util/reactNode';
import { previewImage, isImageUrl } from './utils';
import Tooltip from '../tooltip';
import Progress from '../progress';
import { ConfigContext } from '../config-provider';
import Button from '../button';
import useForceUpdate from '../_util/hooks/useForceUpdate';

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
  var forceUpdate = useForceUpdate();
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
    var fileIcon = isImgUrl && isImgUrl(file) ? /*#__PURE__*/React.createElement(PictureTwoTone, null) : /*#__PURE__*/React.createElement(FileTwoTone, null);
    var icon = isLoading ? /*#__PURE__*/React.createElement(LoadingOutlined, null) : /*#__PURE__*/React.createElement(PaperClipOutlined, null);

    if (listType === 'picture') {
      icon = isLoading ? /*#__PURE__*/React.createElement(LoadingOutlined, null) : fileIcon;
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

        if (isValidElement(customIcon) && customIcon.props.onClick) {
          customIcon.props.onClick(e);
        }
      },
      className: "".concat(prefixCls, "-list-item-card-actions-btn")
    };

    if (isValidElement(customIcon)) {
      var btnIcon = cloneElement(customIcon, _extends(_extends({}, customIcon.props), {
        onClick: function onClick() {}
      }));
      return /*#__PURE__*/React.createElement(Button, _extends({}, btnProps, {
        icon: btnIcon
      }));
    }

    return /*#__PURE__*/React.createElement(Button, btnProps, /*#__PURE__*/React.createElement("span", null, customIcon));
  }; // Test needs


  React.useImperativeHandle(ref, function () {
    return {
      handlePreview: handlePreview,
      handleDownload: handleDownload
    };
  });

  var _React$useContext = React.useContext(ConfigContext),
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

        var uploadingClassName = classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-list-item-thumbnail"), true), _defineProperty(_classNames, "".concat(prefixCls, "-list-item-file"), file.status !== 'uploading'), _classNames));
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
        var aClassName = classNames((_classNames2 = {}, _defineProperty(_classNames2, "".concat(prefixCls, "-list-item-thumbnail"), true), _defineProperty(_classNames2, "".concat(prefixCls, "-list-item-file"), isImgUrl && !isImgUrl(file)), _classNames2));
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
      var loadingProgress = 'percent' in file ? /*#__PURE__*/React.createElement(Progress, _extends({}, progressProps, {
        type: "line",
        percent: file.percent
      })) : null;
      progress = /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-list-item-progress"),
        key: "progress"
      }, loadingProgress);
    }

    var infoUploadingClass = classNames((_classNames3 = {}, _defineProperty(_classNames3, "".concat(prefixCls, "-list-item"), true), _defineProperty(_classNames3, "".concat(prefixCls, "-list-item-").concat(file.status), true), _defineProperty(_classNames3, "".concat(prefixCls, "-list-item-list-type-").concat(listType), true), _classNames3));
    var linkProps = typeof file.linkProps === 'string' ? JSON.parse(file.linkProps) : file.linkProps;
    var removeIcon = showRemoveIcon ? handleActionIconRender(customRemoveIcon || /*#__PURE__*/React.createElement(DeleteOutlined, null), function () {
      return handleClose(file);
    }, prefixCls, locale.removeFile) : null;
    var downloadIcon = showDownloadIcon && file.status === 'done' ? handleActionIconRender(customDownloadIcon || /*#__PURE__*/React.createElement(DownloadOutlined, null), function () {
      return handleDownload(file);
    }, prefixCls, locale.downloadFile) : null;
    var downloadOrDelete = listType !== 'picture-card' && /*#__PURE__*/React.createElement("span", {
      key: "download-delete",
      className: "".concat(prefixCls, "-list-item-card-actions ").concat(listType === 'picture' ? 'picture' : '')
    }, downloadIcon, removeIcon);
    var listItemNameClass = classNames((_classNames4 = {}, _defineProperty(_classNames4, "".concat(prefixCls, "-list-item-name"), true), _defineProperty(_classNames4, "".concat(prefixCls, "-list-item-name-icon-count-").concat([downloadIcon, removeIcon].filter(function (x) {
      return x;
    }).length), true), _classNames4));
    var preview = file.url ? [/*#__PURE__*/React.createElement("a", _extends({
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
    }, /*#__PURE__*/React.createElement(EyeOutlined, null)) : null;
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
    }, iconAndPreview), actions, /*#__PURE__*/React.createElement(Animate, {
      transitionName: "fade",
      component: ""
    }, progress));
    var listContainerNameClass = classNames(_defineProperty({}, "".concat(prefixCls, "-list-picture-card-container"), listType === 'picture-card'));
    return /*#__PURE__*/React.createElement("div", {
      key: file.uid,
      className: listContainerNameClass
    }, file.status === 'error' ? /*#__PURE__*/React.createElement(Tooltip, {
      title: message,
      getPopupContainer: function getPopupContainer(node) {
        return node.parentNode;
      }
    }, dom) : /*#__PURE__*/React.createElement("span", null, dom));
  });
  var listClassNames = classNames((_classNames6 = {}, _defineProperty(_classNames6, "".concat(prefixCls, "-list"), true), _defineProperty(_classNames6, "".concat(prefixCls, "-list-").concat(listType), true), _defineProperty(_classNames6, "".concat(prefixCls, "-list-rtl"), direction === 'rtl'), _classNames6));
  var animationDirection = listType === 'picture-card' ? 'animate-inline' : 'animate';
  var transitionName = list.length === 0 ? '' : "".concat(prefixCls, "-").concat(animationDirection);
  return /*#__PURE__*/React.createElement(Animate, {
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
  previewFile: previewImage,
  isImageUrl: isImageUrl
};
export default UploadList;