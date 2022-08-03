Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\r\n  ref="button"\r\n  ';
 for (var attr in ctx.input.attr) { ;
__p += '\r\n  ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\r\n  ';
 } ;
__p += '\r\n  aria-labelledby="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n  ';
 if (ctx.component.description) { ;
__p += '\r\n    aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n  ';
 } ;
__p += '\r\n>\r\n  ' +
((__t = (ctx.input.content)) == null ? '' : __t) +
'\r\n</' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'>\r\n<div ref="buttonMessageContainer">\r\n  <span class="display-block margin-top-1 margin-bottom-105 help-block" ref="buttonMessage"></span>\r\n</div>\r\n';
return __p
}