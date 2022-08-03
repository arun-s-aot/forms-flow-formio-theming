Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div\r\n  id="' +
((__t = (ctx.id)) == null ? '' : __t) +
'"\r\n  class="' +
((__t = (ctx.component.type !== 'button' ? ctx.component.customClass : '')) == null ? '' : __t) +
'\r\n    formio-component-' +
((__t = (ctx.component.type)) == null ? '' : __t) +
'\r\n    ' +
((__t = (!ctx.self.hasInput ? 'formsflow-prose' : 'formio-form-group')) == null ? '' : __t) +
'\r\n    ' +
((__t = (!ctx.visible ? 'formio-hidden' : '')) == null ? '' : __t) +
'"\r\n  ';
 if (ctx.styles) { ;
__p += ' style="' +
((__t = (ctx.styles)) == null ? '' : __t) +
'"';
 } ;
__p += '\r\n  ref="component"\r\n>\r\n  ';
 if (ctx.visible) { ;
__p += '\r\n  ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\r\n  ';
 } ;
__p += '\r\n</div>\r\n';
return __p
}