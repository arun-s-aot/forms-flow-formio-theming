Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table class="formsflow-table" role="presentation">\n  <tbody>\n  ' +
((__t = (ctx.rows)) == null ? '' : __t) +
'\n  ';
 if (!ctx.disabled) { ;
__p += '\n  <tr>\n    <td colspan="2">\n      <button\n        class="formsflow-button formio-button-add-another"\n        ref="addButton"\n        ';
 if (ctx.component.description) { ;
__p += '\n        aria-describedby="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\n        ';
 } ;
__p += '\n      >\n        <i class="' +
((__t = (ctx.iconClass('plus'))) == null ? '' : __t) +
'"></i>\n        ' +
((__t = (ctx.t(ctx.addAnother))) == null ? '' : __t) +
'\n      </button>\n    </td>\n  </tr>\n  ';
 } ;
__p += '\n  </tbody>\n</table>\n';
return __p
}