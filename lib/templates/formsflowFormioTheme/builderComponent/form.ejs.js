Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default=function(ctx) {
var __t, __p = '', __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
__p += '<div aria-label="' +
((__t = (ctx.childComponent.label)) == null ? '' : __t) +
' ' +
((__t = (ctx.childComponent.type)) == null ? '' : __t) +
' container" class="builder-component" ref="dragComponent" tabindex="0">\r\n  ';
 if (!ctx.disableBuilderActions) { ;
__p += '\r\n  <div role="application" tabindex="0" aria-label="Action buttons. Use up and down arrows to navigate through action buttons" class="component-btn-group" id="buttons-' +
((__t = (ctx.childComponent.id)) == null ? '' : __t) +
'" data-noattach="true" ref="buttonGroup">\r\n    <div\r\n      role="button"\r\n      aria-label="Remove button. Click to remove component from the form"\r\n      tabindex="-1"\r\n      class="formsflow-formio-button formsflow-formio-button--secondary component-settings-button component-settings-button-remove"\r\n      ref="removeComponent"\r\n    >\r\n      <i class="' +
((__t = (ctx.iconClass('remove'))) == null ? '' : __t) +
'"></i>\r\n    </div>\r\n    <div\r\n      role="button"\r\n      aria-label="Copy button. Click to copy component"\r\n      tabindex="-1"\r\n      class="formsflow-formio-button formsflow-formio-button--outline component-settings-button component-settings-button-copy"\r\n      ref="copyComponent"\r\n    >\r\n      <i class="' +
((__t = (ctx.iconClass('copy'))) == null ? '' : __t) +
'"></i>\r\n    </div>\r\n    <div\r\n      role="button"\r\n      aria-label="Paste below button. Click to paste component below the current component"\r\n      tabindex="-1"\r\n      class="formsflow-formio-button formsflow-formio-button--outline component-settings-button component-settings-button-paste"\r\n      ref="pasteComponent"\r\n    >\r\n      <i class="' +
((__t = (ctx.iconClass('save'))) == null ? '' : __t) +
'"></i>\r\n    </div>\r\n    <div\r\n      role="button"\r\n      aria-label="Move button"\r\n      tabindex="-1"\r\n      class="formsflow-formio-button formsflow-formio-button--outline component-settings-button component-settings-button-move"\r\n      ref="moveComponent"\r\n    >\r\n      <i class="' +
((__t = (ctx.iconClass('move'))) == null ? '' : __t) +
'"></i>\r\n    </div>\r\n    <div\r\n      role="button"\r\n      aria-label="Edit button. Click to open component settings modal window"\r\n      tabindex="-1"\r\n      class="formsflow-formio-button formsflow-formio-button--accent-cool component-settings-button component-settings-button-edit"\r\n      ref="editComponent"\r\n    >\r\n      <i class="' +
((__t = (ctx.iconClass('cog'))) == null ? '' : __t) +
'"></i>\r\n    </div>\r\n  </div>\r\n  ';
 } ;
__p += '\r\n  ' +
((__t = (ctx.html)) == null ? '' : __t) +
'\r\n</div>\r\n';
return __p
}