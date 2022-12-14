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
var SelectComponent = formiojs_1.Components.components.select;
var FormsflowFormioThemeSelectComponent = /** @class */ (function (_super) {
    __extends(FormsflowFormioThemeSelectComponent, _super);
    function FormsflowFormioThemeSelectComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormsflowFormioThemeSelectComponent.prototype.choicesOptions = function () {
        var choicesOptions = _super.prototype.choicesOptions.call(this);
        choicesOptions.classNames.containerInner += ' formsflow-select maxw-full';
        return choicesOptions;
    };
    return FormsflowFormioThemeSelectComponent;
}(SelectComponent));
exports.default = FormsflowFormioThemeSelectComponent;
