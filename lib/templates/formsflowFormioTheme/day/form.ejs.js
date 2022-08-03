Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<fieldset class="formsflow-fieldset">\r\n  <legend class="formsflow-legend formsflow-sr-only">' +
((__t = (ctx.component.label)) == null ? '' : __t) +
'</legend>\r\n  <div class="formsflow-memorable-date display-flex"\r\n    role="group"\r\n    ';
 if (ctx.component.hideLabel) { ;
__p += '\r\n    aria-label="' +
((__t = (ctx.component.label)) == null ? '' : __t) +
'"\r\n    ';
 } else { ;
__p += '\r\n    aria-labelledby="l-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n    ';
 } ;
__p += '\r\n    ';
 if (ctx.component.description) { ;
__p += '\r\n    aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n    ';
 } ;
__p += '\r\n  >\r\n    ';
 if (ctx.dayFirst && ctx.showDay) { ;
__p += '\r\n    <div class="formio-form-group formsflow-form-group--day flex-1">\r\n      <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day"\r\n        class="formsflow-label ';
 if (ctx.component.hideInputLabels) { ;
__p += 'formsflow-sr-only';
 } ;
__p += ' ';
 if(ctx.component.fields.day.required) { ;
__p += 'field-required';
 } ;
__p += '"\r\n      >' +
((__t = (ctx.t('Day'))) == null ? '' : __t) +
'</label>\r\n\r\n      <input class="formsflow-input formsflow-input--inline"\r\n        ref="day"\r\n        name="day"\r\n        id="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day"\r\n        ';
 if (ctx.component.fields.day.placeholder) { ;
__p += 'placeholder="' +
((__t = (ctx.component.fields.day.placeholder)) == null ? '' : __t) +
'"';
 } ;
__p += '\r\n        ';
 if (ctx.component.description) { ;
__p += '\r\n        aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n        ';
 } ;
__p += '\r\n        type="number" min="1" max="31" step="1" value="">\r\n    </div>\r\n    ';
 } ;
__p += '\r\n\r\n    ';
 if (ctx.showMonth) { ;
__p += '\r\n    <div class="formio-form-group formsflow-form-group--month flex-1">\r\n      <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-month"\r\n        class="formsflow-label ';
 if (ctx.component.hideInputLabels) { ;
__p += 'formsflow-sr-only';
 } ;
__p += ' ';
 if(ctx.component.fields.month.required) { ;
__p += 'field-required';
 } ;
__p += '"\r\n      >' +
((__t = (ctx.t('Month'))) == null ? '' : __t) +
'</label>\r\n      <div>' +
((__t = (ctx.month)) == null ? '' : __t) +
'</div>\r\n    </div>\r\n    ';
 } ;
__p += '\r\n\r\n    ';
 if (!ctx.dayFirst && ctx.showDay) { ;
__p += '\r\n    <div class="formio-form-group formsflow-form-group--day flex-1">\r\n      <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day"\r\n        class="formsflow-label ';
 if (ctx.component.hideInputLabels) { ;
__p += 'formsflow-sr-only';
 } ;
__p += ' ';
 if(ctx.component.fields.day.required) { ;
__p += 'field-required';
 } ;
__p += '"\r\n      >' +
((__t = (ctx.t('Day'))) == null ? '' : __t) +
'</label>\r\n\r\n      <input class="formsflow-input formsflow-input--inline"\r\n        ref="day"\r\n        name="day"\r\n        id="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-day"\r\n        ';
 if (ctx.component.fields.day.placeholder) { ;
__p += 'placeholder="' +
((__t = (ctx.component.fields.day.placeholder)) == null ? '' : __t) +
'"';
 } ;
__p += '\r\n        ';
 if (ctx.component.description) { ;
__p += '\r\n        aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n        ';
 } ;
__p += '\r\n        type="number" min="1" max="31" step="1" value="">\r\n    </div>\r\n    ';
 } ;
__p += '\r\n\r\n    ';
 if (ctx.showYear) { ;
__p += '\r\n    <div class="formio-form-group formsflow-form-group--year flex-1">\r\n      <label for="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-year"\r\n        class="formsflow-label ';
 if (ctx.component.hideInputLabels) { ;
__p += 'formsflow-sr-only';
 } ;
__p += ' ';
 if(ctx.component.fields.year.required) { ;
__p += 'field-required';
 } ;
__p += '"\r\n      >' +
((__t = (ctx.t('Year'))) == null ? '' : __t) +
'</label>\r\n\r\n      <input class="formsflow-input formsflow-input--inline"\r\n        ref="year"\r\n        name="year"\r\n        id="' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'-year"\r\n        ';
 if (ctx.component.fields.year.placeholder) { ;
__p += 'placeholder="' +
((__t = (ctx.component.fields.year.placeholder)) == null ? '' : __t) +
'"';
 } ;
__p += '\r\n        ';
 if (ctx.component.description) { ;
__p += '\r\n        aria-describedby="d-' +
((__t = (ctx.instance.id)) == null ? '' : __t) +
'-' +
((__t = (ctx.component.key)) == null ? '' : __t) +
'"\r\n        ';
 } ;
__p += '\r\n        type="number"\r\n        min="' +
((__t = ( !!ctx.component.fields.year.minYear ? ctx.component.fields.year.minYear : 1900 )) == null ? '' : __t) +
'"\r\n        max="' +
((__t = ( !!ctx.component.fields.year.maxYear ? ctx.component.fields.year.maxYear : 2019 )) == null ? '' : __t) +
'" value="">\r\n    </div>\r\n    ';
 } ;
__p += '\r\n  </div>\r\n  <input name="ctx.data[day]" type="hidden" class="form-control" lang="en" value="" ref="input">\r\n</fieldset>\r\n';
return __p
}