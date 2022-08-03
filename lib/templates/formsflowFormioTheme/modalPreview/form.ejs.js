Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '';
__p += '<span id="l-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'">\r\n  ' +
((__t = ( ctx.t(ctx.component.label) )) == null ? '' : __t) +
'<span ref="modalLabelValue" class="formsflow-sr-only">. ' +
((__t = ( ctx.previewText )) == null ? '' : __t) +
'</span>\r\n</span><br>\r\n<div\r\n  ref="modalMessageContainer"\r\n  class="text-secondary-dark width-full formio-errors"\r\n></div>\r\n<span class="formsflow-sr-only" ref="modalPreviewLiveRegion" aria-live="assertive"></span>\r\n<button lang="en" class="open-modal-button" ref="openModal" aria-labelledby="l-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'">\r\n  ' +
((__t = ( ctx.previewText )) == null ? '' : __t) +
'\r\n</button>\r\n';
return __p
}