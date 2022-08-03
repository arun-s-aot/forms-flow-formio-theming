Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }

 if (ctx.prefix || ctx.suffix) { ;
__p += '\r\n<div class="input-group">\r\n';
 } ;
__p += '\r\n';
 if (ctx.prefix) { ;
__p += '\r\n<div class="input-group-prepend" ref="prefix">\r\n  <span class="input-group-text">\r\n    ';
 if (ctx.prefix instanceof HTMLElement) { ;
__p += '\r\n      ' +
((__t = ( ctx.t(ctx.prefix.outerHTML) )) == null ? '' : __t) +
'\r\n    ';
 } else { ;
__p += '\r\n      ' +
((__t = ( ctx.t(ctx.prefix) )) == null ? '' : __t) +
'\r\n    ';
 } ;
__p += '\r\n  </span>\r\n</div>\r\n';
 } ;
__p += '\r\n';
 if (!ctx.component.editor && !ctx.component.wysiwyg) { ;
__p += '\r\n<' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'\r\n  class="formsflow-' +
((__t = (ctx.input.type === 'textarea' ? 'textarea' : 'input')) == null ? '' : __t) +
' maxw-full"\r\n  ref="' +
((__t = (ctx.input.ref || 'input')) == null ? '' : __t) +
'"\r\n  ';
 for (var attr in ctx.input.attr) { ;
__p += '\r\n  ' +
((__t = (attr)) == null ? '' : __t) +
'="' +
((__t = (ctx.input.attr[attr])) == null ? '' : __t) +
'"\r\n  ';
 } ;
__p += '\r\n  id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n  aria-labelledby="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
' ';
 if (ctx.component.description) { ;
__p += 'd-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t);
 } ;
__p += '"\r\n  aria-required="' +
((__t = (ctx.input.ref === 'input' || !ctx.input.ref ? ctx.component.validate.required : ctx.component.fields[ctx.input.ref].required)) == null ? '' : __t) +
'"\r\n>' +
((__t = (ctx.input.content)) == null ? '' : __t) +
'</' +
((__t = (ctx.input.type)) == null ? '' : __t) +
'>\r\n';
 } ;
__p += '\r\n';
 if (ctx.component.editor || ctx.component.wysiwyg) { ;
__p += '\r\n<div ref="input"></div>\r\n';
 } ;
__p += '\r\n';
 if (ctx.component.type === 'datetime') { ;
__p += '\r\n<span aria-live="assertive" id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-liveRegion" class="formsflow-sr-only" ref="liveRegion"></span>\r\n';
 } ;
__p += '\r\n';
 if (ctx.suffix) { ;
__p += '\r\n<div class="input-group-append" ref="suffix">\r\n  <span class="input-group-text">\r\n    ';
 if (ctx.suffix instanceof HTMLElement) { ;
__p += '\r\n      ' +
((__t = ( ctx.t(ctx.suffix.outerHTML) )) == null ? '' : __t) +
'\r\n    ';
 } else { ;
__p += '\r\n      ' +
((__t = ( ctx.t(ctx.suffix) )) == null ? '' : __t) +
'\r\n    ';
 } ;
__p += '\r\n  </span>\r\n</div>\r\n';
 } ;
__p += '\r\n';
 if (ctx.prefix || ctx.suffix) { ;
__p += '\r\n</div>\r\n';
 } ;
__p += '\r\n';
 if (ctx.component.showCharCount || ctx.component.showWordCount) { ;
__p += '\r\n<div class="' +
((__t = (ctx.component.description ? 'pull-right' : 'text-right')) == null ? '' : __t) +
'">\r\n  ';
 if (ctx.component.showCharCount) { ;
__p += '\r\n  <span aria-live="polite" class="text-muted" ref="charcount"></span>\r\n  ';
 } ;
__p += '\r\n  ';
 if (ctx.component.showWordCount) { ;
__p += '\r\n  <span aria-live="polite" class="text-muted" ref="wordcount"></span>\r\n  ';
 } ;
__p += '\r\n</div>\r\n';
 } ;
__p += '\r\n';
return __p
}