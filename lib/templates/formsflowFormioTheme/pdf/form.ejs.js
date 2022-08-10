Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div class="position-relative ' +
((__t = (ctx.classes)) == null ? '' : __t) +
'" ref="webform">\r\n  <span data-noattach="true" ref="zoomIn" class="formsflow-formio-button formsflow-formio-button--secondary position-absolute" style="right:10px;top:10px;">\r\n    <i class="' +
((__t = ( ctx.iconClass('zoom-in') )) == null ? '' : __t) +
'"></i>\r\n  </span>\r\n  <span data-noattach="true" ref="zoomOut" class="formsflow-formio-button formsflow-formio-button--secondary position-absolute" style="right:10px;top:60px;">\r\n    <i class="' +
((__t = ( ctx.iconClass('zoom-out') )) == null ? '' : __t) +
'"></i>\r\n  </span>\r\n  <div data-noattach="true" ref="iframeContainer"></div>\r\n  ' +
((__t = ( ctx.submitButton )) == null ? '' : __t) +
'\r\n</div>\r\n';
return __p
}