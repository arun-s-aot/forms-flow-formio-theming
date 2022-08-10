"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var formiojs_1 = require("formiojs");
var Button_form_1 = require("./Button.form");
var ButtonComponent = formiojs_1.Components.components.button;
var FieldComponent = formiojs_1.Components.components.field;
var FormsflowFormioThemeButtonComponent = /** @class */ (function (_super) {
    __extends(FormsflowFormioThemeButtonComponent, _super);
    function FormsflowFormioThemeButtonComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormsflowFormioThemeButtonComponent.prototype.getInputInfo = function () {
        var info = this.inputInfo;
        info.attr.class = 'formsflow-formio-button';
        switch (this.component.theme) {
            case 'secondary':
                info.attr.class += ' formsflow-formio-button--secondary';
                break;
            case 'info':
            case 'accent-cool':
                info.attr.class += ' formsflow-formio-button--accent-cool';
                break;
            case 'success':
                info.attr.class += ' bg-green';
                break;
            case 'danger':
                info.attr.class += ' bg-secondary-vivid';
                break;
            case 'warning':
                info.attr.class += ' formsflow-formio-button--accent-warm';
                break;
            case 'base':
                info.attr.class += ' formsflow-formio-button--base';
                break;
            case 'outline':
                info.attr.class += ' formsflow-formio-button--outline';
                break;
        }
        if (this.component.customClass) {
            info.attr.class += " ".concat(this.component.customClass);
        }
        return info;
    };
    FormsflowFormioThemeButtonComponent.prototype.render = function () {
        if (this.viewOnly || this.options.hideButtons) {
            this._visible = false;
        }
        return FieldComponent.prototype.render.call(this, this.renderTemplate('button', {
            component: this.component,
            input: this.getInputInfo(),
        }));
    };
    FormsflowFormioThemeButtonComponent.editForm = Button_form_1.default;
    return FormsflowFormioThemeButtonComponent;
}(ButtonComponent));
exports.default = FormsflowFormioThemeButtonComponent;
