Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="formsflow-step-indicator formsflow-step-indicator--no-labels" ref="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-header" aria-label="Wizard" id="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-header">\r\n  <ol class="formsflow-step-indicator__segments" tabindex="0" aria-label="Progress bar, Step ' +
((__t = (ctx.currentPage + 1)) == null ? '' : __t) +
' of ' +
((__t = (ctx.panels.length)) == null ? '' : __t) +
', ' +
((__t = (ctx.panels[ctx.currentPage].title)) == null ? '' : __t) +
'">\r\n    ';
 ctx.panels.forEach(function(panel, index) { ;
__p += '\r\n    <li data-index="' +
((__t = (index)) == null ? '' : __t) +
'" class="formsflow-step-indicator__segment ' +
((__t = (ctx.currentPage === index ? 'formsflow-step-indicator__segment--current' : '')) == null ? '' : __t) +
' ' +
((__t = (ctx.currentPage > index ? 'formsflow-step-indicator__segment--complete' : '')) == null ? '' : __t) +
'"></li>\r\n    ';
 }) ;
__p += '\r\n  </ol>\r\n  <div class="formsflow-sr-only" ref="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-progressbar" tabindex="-1">Progress bar, Step ' +
((__t = (ctx.currentPage + 1)) == null ? '' : __t) +
' of ' +
((__t = (ctx.panels.length)) == null ? '' : __t) +
', ' +
((__t = (ctx.panels[ctx.currentPage].title)) == null ? '' : __t) +
'</div>\r\n  <div class="formsflow-step-indicator__header">\r\n    <div class="formsflow-step-indicator__heading">\r\n      <span class="formsflow-sr-only">Progress bar, step</span>\r\n      <span class="formsflow-step-indicator__heading-counter">\r\n        <span class="formsflow-step-indicator__current-step">' +
((__t = (ctx.currentPage + 1)) == null ? '' : __t) +
'</span>\r\n        <span class="formsflow-step-indicator__total-steps">of ' +
((__t = (ctx.panels.length)) == null ? '' : __t) +
'</span>\r\n      </span>\r\n      <span class="formsflow-step-indicator__heading-text">' +
((__t = (ctx.panels[ctx.currentPage].title)) == null ? '' : __t) +
'</span>\r\n      ';
 if (ctx.panels[ctx.currentPage].tooltip) { ;
__p += '\r\n      <i ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-muted" data-tooltip="' +
((__t = (ctx.panels[ctx.currentPage].tooltip)) == null ? '' : __t) +
'" tabindex="0"></i>\r\n      ';
 } ;
__p += '\r\n    </div>\r\n  </div>\r\n</div>\r\n';
return __p
}