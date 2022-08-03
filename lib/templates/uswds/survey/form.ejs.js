Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<table class="formsflow-table">\n  <thead>\n    <tr>\n      <th scope="col"></th>\n      ';
 ctx.component.values.forEach(function(value) { ;
__p += '\n      <th scope="col" style="text-align: center;">' +
((__t = (ctx.t(value.label))) == null ? '' : __t) +
'</th>\n      ';
 }) ;
__p += '\n    </tr>\n  </thead>\n  <tbody>\n    ';
 ctx.component.questions.forEach(function(question) { ;
__p += '\n    <tr>\n      <th scope="row">' +
((__t = (ctx.t(question.label))) == null ? '' : __t) +
'</th>\n      <fieldset class="formsflow-fieldset formsflow-sr-only">\n        <legend class="formsflow-sr-only">' +
((__t = (ctx.t(question.label))) == null ? '' : __t) +
'</legend>\n        ';
 ctx.component.values.forEach(function(value) { ;
__p += '\n        <td>\n          <div class="formsflow-radio">\n            <input class="formsflow-radio__input" type="radio" name="' +
((__t = ( ctx.self.getInputName(question) )) == null ? '' : __t) +
'" value="' +
((__t = (value.value)) == null ? '' : __t) +
'" id="' +
((__t = (ctx.key)) == null ? '' : __t) +
'-' +
((__t = (question.value)) == null ? '' : __t) +
'-' +
((__t = (value.value)) == null ? '' : __t) +
'" ref="input">\n            <label class="formsflow-radio__label" for="' +
((__t = (ctx.key)) == null ? '' : __t) +
'-' +
((__t = (question.value)) == null ? '' : __t) +
'-' +
((__t = (value.value)) == null ? '' : __t) +
'"></label>\n            <label class="formsflow-sr-only" for="' +
((__t = (ctx.key)) == null ? '' : __t) +
'-' +
((__t = (question.value)) == null ? '' : __t) +
'-' +
((__t = (value.value)) == null ? '' : __t) +
'">' +
((__t = (ctx.t(value.label))) == null ? '' : __t) +
'</label>\n          </div>\n        </td>\n        ';
 }) ;
__p += '\n      </fieldset>\n    </tr>\n    ';
 }) ;
__p += '\n  </tbody>\n</table>\n';
return __p
}