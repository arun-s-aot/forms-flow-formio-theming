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
'-header">\n  <ol class="formsflow-step-indicator__segments" tabindex="0" aria-label="Progress bar, Step ' +
((__t = (ctx.currentPage + 1)) == null ? '' : __t) +
' of ' +
((__t = (ctx.panels.length)) == null ? '' : __t) +
', ' +
((__t = (ctx.panels[ctx.currentPage].title)) == null ? '' : __t) +
'">\n    ';
 ctx.panels.forEach(function(panel, index) { ;
__p += '\n    <li data-index="' +
((__t = (index)) == null ? '' : __t) +
'" class="formsflow-step-indicator__segment ' +
((__t = (ctx.currentPage === index ? 'formsflow-step-indicator__segment--current' : '')) == null ? '' : __t) +
' ' +
((__t = (ctx.currentPage > index ? 'formsflow-step-indicator__segment--complete' : '')) == null ? '' : __t) +
'"></li>\n    ';
 }) ;
__p += '\n  </ol>\n  <div class="formsflow-sr-only" ref="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-progressbar" tabindex="-1">Progress bar, Step ' +
((__t = (ctx.currentPage + 1)) == null ? '' : __t) +
' of ' +
((__t = (ctx.panels.length)) == null ? '' : __t) +
', ' +
((__t = (ctx.panels[ctx.currentPage].title)) == null ? '' : __t) +
'</div>\n  <div class="formsflow-step-indicator__header">\n    <div class="formsflow-step-indicator__heading">\n      <span class="formsflow-sr-only">Progress bar, step</span>\n      <span class="formsflow-step-indicator__heading-counter">\n        <span class="formsflow-step-indicator__current-step">' +
((__t = (ctx.currentPage + 1)) == null ? '' : __t) +
'</span>\n        <span class="formsflow-step-indicator__total-steps">of ' +
((__t = (ctx.panels.length)) == null ? '' : __t) +
'</span>\n      </span>\n      <span class="formsflow-step-indicator__heading-text">' +
((__t = (ctx.panels[ctx.currentPage].title)) == null ? '' : __t) +
'</span>\n      ';
 if (ctx.panels[ctx.currentPage].tooltip) { ;
__p += '\n      <i ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-muted" data-tooltip="' +
((__t = (ctx.panels[ctx.currentPage].tooltip)) == null ? '' : __t) +
'" tabindex="0"></i>\n      ';
 } ;
__p += '\n    </div>\n  </div>\n</div>\n';
return __p
}