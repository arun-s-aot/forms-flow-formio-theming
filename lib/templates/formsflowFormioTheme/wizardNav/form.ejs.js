Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<ul class="padding-0 formsflow-list--unstyled wizard-nav-container" id="' +
((__t = ( ctx.wizardKey )) == null ? '' : __t) +
'-nav">\r\n  ';
 if (ctx.buttons.next) { ;
__p += '\r\n  <li>\r\n    <button class="formsflow-button btn-wizard-nav-next" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-next" aria-label="' +
((__t = (ctx.t('next'))) == null ? '' : __t) +
' button. Click to go to the next tab">' +
((__t = (ctx.t('next'))) == null ? '' : __t) +
'</button>\r\n  </li>\r\n  ';
 } ;
__p += '\r\n  ';
 if (ctx.buttons.submit) { ;
__p += '\r\n  <li>\r\n    <button class="formsflow-button btn-wizard-nav-submit" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-submit" aria-label="' +
((__t = (ctx.t('submit'))) == null ? '' : __t) +
' button. Click to submit the form">' +
((__t = (ctx.t('submit'))) == null ? '' : __t) +
'</button>\r\n  </li>\r\n  ';
 } ;
__p += '\r\n  ';
 if (ctx.buttons.previous) { ;
__p += '\r\n  <li>\r\n    <button class="formsflow-button formsflow-button--outline btn-wizard-nav-previous" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-previous" aria-label="' +
((__t = (ctx.t('previous'))) == null ? '' : __t) +
' button. Click to go back to the previous tab">' +
((__t = (ctx.t('previous'))) == null ? '' : __t) +
'</button>\r\n  </li>\r\n  ';
 } ;
__p += '\r\n  ';
 if (ctx.buttons.cancel) { ;
__p += '\r\n  <li>\r\n    <button class="formsflow-button formsflow-button--secondary btn-wizard-nav-cancel" ref="' +
((__t = (ctx.wizardKey)) == null ? '' : __t) +
'-cancel">' +
((__t = (ctx.t('cancel'))) == null ? '' : __t) +
'</button>\r\n  </li>\r\n  ';
 } ;
__p += '\r\n</ul>\r\n';
return __p
}