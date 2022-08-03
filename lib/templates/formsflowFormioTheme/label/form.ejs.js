Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="formsflow-label ' +
((__t = (ctx.label.className)) == null ? '' : __t) +
' ' +
((__t = (ctx.label.hidden ? 'formsflow-sr-only' : '')) == null ? '' : __t) +
'">\r\n  <label\r\n    ref="label"\r\n    id="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n    for="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n  >\r\n    <span>' +
((__t = ( ctx.t(ctx.component.label) )) == null ? '' : __t) +
'</span>\r\n    ';
 if (ctx.component.type === 'number' || ctx.component.type === 'phoneNumber' || ctx.component.type === 'currency') { ;
__p += '\r\n    <span class=\'formsflow-sr-only\'>, ' +
((__t = (ctx.t('numeric only'))) == null ? '' : __t) +
',</span>\r\n    ';
 } ;
__p += '\r\n  </label>\r\n  ';
 if (ctx.component.tooltip && !ctx.label.hidden) { ;
__p += '\r\n    <span ref="tooltip" data-tooltip="' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-base" tabindex="0"></span>\r\n  ';
 } ;
__p += '\r\n</div>\r\n';
return __p
}