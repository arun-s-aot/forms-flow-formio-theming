Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="formio-formsflow-card">\r\n  <ul role="tablist" class="formsflow-sidenav">\r\n    ';
 ctx.component.components.forEach(function(tab, index) { ;
__p += '\r\n    <li role="tab" class="formsflow-sidenav__item ' +
((__t = (ctx.currentTab === index ? 'formsflow-current' : '')) == null ? '' : __t) +
' border-top-0" ref="' +
((__t = (ctx.tabLikey)) == null ? '' : __t) +
'">\r\n      <a href="#' +
((__t = (tab.key)) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.tabLinkKey)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(tab.label))) == null ? '' : __t) +
'</a>\r\n    </li>\r\n    ';
 }) ;
__p += '\r\n  </ul>\r\n\r\n  ';
 ctx.component.components.forEach(function(tab, index) { ;
__p += '\r\n  <div\r\n    role="tabpanel"\r\n    class="formio-formsflow-card-body"\r\n    style="display: ' +
((__t = (ctx.currentTab === index ? 'block' : 'none')) == null ? '' : __t) +
'"\r\n    ref="' +
((__t = (ctx.tabKey)) == null ? '' : __t) +
'"\r\n  >\r\n    ' +
((__t = (ctx.tabComponents[index])) == null ? '' : __t) +
'\r\n  </div>\r\n  ';
 }) ;
__p += '\r\n</div>\r\n';
return __p
}