Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table class="formsflow-table">\r\n  <thead>\r\n    <tr>\r\n      <th scope="col"></th>\r\n      ';
 ctx.component.values.forEach(function(value) { ;
__p += '\r\n      <th scope="col" style="text-align: center;">' +
((__t = (ctx.t(value.label))) == null ? '' : __t) +
'</th>\r\n      ';
 }) ;
__p += '\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    ';
 ctx.component.questions.forEach(function(question) { ;
__p += '\r\n    <tr>\r\n      <th scope="row">' +
((__t = (ctx.t(question.label))) == null ? '' : __t) +
'</th>\r\n      <fieldset class="formsflow-fieldset formsflow-sr-only">\r\n        <legend class="formsflow-sr-only">' +
((__t = (ctx.t(question.label))) == null ? '' : __t) +
'</legend>\r\n        ';
 ctx.component.values.forEach(function(value) { ;
__p += '\r\n        <td>\r\n          <div class="formsflow-radio">\r\n            <input class="formsflow-radio__input" type="radio" name="' +
((__t = ( ctx.self.getInputName(question) )) == null ? '' : __t) +
'" value="' +
((__t = (value.value)) == null ? '' : __t) +
'" id="' +
((__t = (ctx.key)) == null ? '' : __t) +
'-' +
((__t = (question.value)) == null ? '' : __t) +
'-' +
((__t = (value.value)) == null ? '' : __t) +
'" ref="input">\r\n            <label class="formsflow-radio__label" for="' +
((__t = (ctx.key)) == null ? '' : __t) +
'-' +
((__t = (question.value)) == null ? '' : __t) +
'-' +
((__t = (value.value)) == null ? '' : __t) +
'"></label>\r\n            <label class="formsflow-sr-only" for="' +
((__t = (ctx.key)) == null ? '' : __t) +
'-' +
((__t = (question.value)) == null ? '' : __t) +
'-' +
((__t = (value.value)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(value.label))) == null ? '' : __t) +
'</label>\r\n          </div>\r\n        </td>\r\n        ';
 }) ;
__p += '\r\n      </fieldset>\r\n    </tr>\r\n    ';
 }) ;
__p += '\r\n  </tbody>\r\n</table>\r\n';
return __p
}