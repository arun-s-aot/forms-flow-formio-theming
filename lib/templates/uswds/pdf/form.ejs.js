Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<div class="position-relative ' +
((__t = (ctx.classes)) == null ? '' : __t) +
'" ref="webform">\n  <span data-noattach="true" ref="zoomIn" class="formsflow-button formsflow-button--secondary position-absolute" style="right:10px;top:10px;">\n    <i class="' +
((__t = ( ctx.iconClass('zoom-in') )) == null ? '' : __t) +
'"></i>\n  </span>\n  <span data-noattach="true" ref="zoomOut" class="formsflow-button formsflow-button--secondary position-absolute" style="right:10px;top:60px;">\n    <i class="' +
((__t = ( ctx.iconClass('zoom-out') )) == null ? '' : __t) +
'"></i>\n  </span>\n  <div data-noattach="true" ref="iframeContainer"></div>\n  ' +
((__t = ( ctx.submitButton )) == null ? '' : __t) +
'\n</div>\n';
return __p
}