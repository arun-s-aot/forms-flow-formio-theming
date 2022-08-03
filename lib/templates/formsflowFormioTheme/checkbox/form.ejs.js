Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div\r\n  ref="messageContainer"\r\n  class="text-secondary-dark width-full margin-top-05 formio-errors"\r\n></div>\r\n\r\n<div class="formsflow-checkbox">\r\n  <' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\r\n    id="' +
((__t = (ctx.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.input.attr.name)) == null ? '' : __t) +
'"\r\n    ref="input"\r\n    class="formsflow-checkbox__input ' +
((__t = (ctx.component.tileView ? 'formsflow-checkbox__input--tile' : '')) == null ? '' : __t) +
'"\r\n    ';
 for (var attr in ctx.input.attr) { ;
__p += '\r\n    ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\r\n    ';
 } ;
__p += '\r\n    ';
 if (ctx.checked) { ;
__p += 'checked=true';
 } ;
__p += '\r\n    aria-required="' +
((__t = (ctx.component.validate.required)) == null ? '' : __t) +
'"\r\n    ';
 if (ctx.component.description) { ;
__p += '\r\n    aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n    ';
 } ;
__p += '\r\n  ></' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'>\r\n  <label\r\n    ref="label"\r\n    class="' +
((__t = (ctx.input.labelClass)) == null ? '' : __t) +
' formsflow-checkbox__label"\r\n    for="' +
((__t = (ctx.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.input.attr.name)) == null ? '' : __t) +
'"\r\n  >\r\n    ' +
((__t = (ctx.input.label)) == null ? '' : __t) +
'\r\n    ' +
((__t = (ctx.input.content)) == null ? '' : __t) +
'\r\n    ';
 if (ctx.component.tooltip) { ;
__p += '\r\n    <span ref="tooltip" data-tooltip="' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-base" tabindex="0"></span>\r\n    ';
 } ;
__p += '\r\n  </label>\r\n</div>\r\n\r\n';
 if (ctx.component.description) { ;
__p += '\r\n  <div class="text-base-dark">\r\n    <span id="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(ctx.component.description))) == null ? '' : __t) +
'</span>\r\n  </div>\r\n';
 } ;
__p += '\r\n';
return __p
}