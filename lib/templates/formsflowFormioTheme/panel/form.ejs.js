Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="formsflow-accordion formsflow-accordion--bordered margin-bottom-205">\r\n  <h2 class="formsflow-accordion__heading" ref="header">\r\n    ';
 if (ctx.component.collapsible) { ;
__p += '\r\n      <div\r\n        tabindex="0"\r\n        role="button"\r\n        class="formsflow-accordion__button"\r\n        aria-expanded="' +
((__t = (ctx.component.collapsible ? !ctx.collapsed : true)) == null ? '' : __t) +
'"\r\n        aria-controls="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n      >\r\n        ' +
((__t = (ctx.t(ctx.component.title))) == null ? '' : __t) +
'\r\n        ';
 if (ctx.component.tooltip) { ;
__p += '\r\n          <i ref="tooltip" data-tooltip="' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-based" tabindex="0"></i>\r\n        ';
 } ;
__p += '\r\n      </div>\r\n    ';
 } else { ;
__p += '\r\n      <div class="formsflow-accordion__button non-collapsible-panel--button">\r\n        ' +
((__t = (ctx.t(ctx.component.title))) == null ? '' : __t) +
'\r\n        ';
 if (ctx.component.tooltip) { ;
__p += '\r\n          <i ref="tooltip" data-tooltip="' +
((__t = (ctx.component.tooltip)) == null ? '' : __t) +
'" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-based" tabindex="0"></i>\r\n        ';
 } ;
__p += '\r\n      </div>\r\n    ';
 } ;
__p += '\r\n  </h2>\r\n\r\n  <div\r\n    id="' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n    class="formio-panel-content formsflow-accordion__content formsflow-prose"\r\n    ref="' +
((__t = (ctx.nestedKey)) == null ? '' : __t) +
'"\r\n    ';
 if (ctx.component.collapsible && ctx.collapsed) { ;
__p += 'hidden';
 } ;
__p += '\r\n  >\r\n    ' +
((__t = (ctx.children)) == null ? '' : __t) +
'\r\n  </div>\r\n</div>\r\n';
return __p
}