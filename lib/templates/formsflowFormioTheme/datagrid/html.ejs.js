Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table class="formsflow-table datagrid-table">\r\n  ';
 if (ctx.hasHeader) { ;
__p += '\r\n  <thead>\r\n    <tr>\r\n      ';
 ctx.columns.forEach(function(col) { ;
__p += '\r\n        <th scope="col" class="' +
((__t = (col.validate && col.validate.required ? 'field-required' : '')) == null ? '' : __t) +
'">\r\n          ' +
((__t = ( col.hideLabel ? '' : ctx.t(col.label || col.title) )) == null ? '' : __t) +
'\r\n          ';
 if (col.tooltip) { ;
__p += ' <i ref="tooltip" class="' +
((__t = (ctx.iconClass('question-sign'))) == null ? '' : __t) +
' text-base"></i>';
 } ;
__p += '\r\n        </th>\r\n      ';
 }) ;
__p += '\r\n    </tr>\r\n  </thead>\r\n  ';
 } ;
__p += '\r\n  <tbody>\r\n    ';
 ctx.rows.forEach(function(row) { ;
__p += '\r\n    <tr>\r\n      ';
 ctx.columns.forEach(function(col) { ;
__p += '\r\n        <td ref="' +
((__t = (ctx.datagridKey)) == null ? '' : __t) +
'">\r\n          ' +
((__t = (row[col.key])) == null ? '' : __t) +
'\r\n        </td>\r\n      ';
 }) ;
__p += '\r\n    </tr>\r\n    ';
 }) ;
__p += '\r\n  </tbody>\r\n</table>\r\n';
return __p
}