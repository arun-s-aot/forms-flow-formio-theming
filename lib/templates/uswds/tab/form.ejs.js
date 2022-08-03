Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="formio-formsflow-card">\n  <ul role="tablist" class="formsflow-sidenav">\n    ';
 ctx.component.components.forEach(function(tab, index) { ;
__p += '\n    <li role="tab" class="formsflow-sidenav__item ' +
((__t = (ctx.currentTab === index ? 'formsflow-current' : '')) == null ? '' : __t) +
' border-top-0" ref="' +
((__t = (ctx.tabLikey)) == null ? '' : __t) +
'">\n      <a href="#' +
((__t = (tab.key)) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.tabLinkKey)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(tab.label))) == null ? '' : __t) +
'</a>\n    </li>\n    ';
 }) ;
__p += '\n  </ul>\n\n  ';
 ctx.component.components.forEach(function(tab, index) { ;
__p += '\n  <div\n    role="tabpanel"\n    class="formio-formsflow-card-body"\n    style="display: ' +
((__t = (ctx.currentTab === index ? 'block' : 'none')) == null ? '' : __t) +
'"\n    ref="' +
((__t = (ctx.tabKey)) == null ? '' : __t) +
'"\n  >\n    ' +
((__t = (ctx.tabComponents[index])) == null ? '' : __t) +
'\n  </div>\n  ';
 }) ;
__p += '\n</div>\n';
return __p
}