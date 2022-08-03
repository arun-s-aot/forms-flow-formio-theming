Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div class="grid-row grid-gap">\r\n';
 ctx.component.columns.forEach(function(column, index) { ;
__p += '\r\n    <div class="';
 if (ctx.size(column.size) !== '') { ;
__p +=
((__t = (ctx.size(column.size))) == null ? '' : __t) +
':';
 } ;
__p += 'grid-col-' +
((__t = (column.width)) == null ? '' : __t) +
' grid-offset-' +
((__t = (column.offset)) == null ? '' : __t) +
'" ref="' +
((__t = (ctx.columnKey)) == null ? '' : __t) +
'">\r\n        ' +
((__t = (ctx.columnComponents[index])) == null ? '' : __t) +
'\r\n    </div>\r\n';
 }) ;
__p += '\r\n</div>\r\n';
return __p
}