import { Components } from 'formiojs';
import editForm from './Button.form';

const ButtonComponent = Components.components.button;
const FieldComponent = Components.components.field;

export default class FormsflowFormioThemeButtonComponent extends ButtonComponent {
  static editForm = editForm;
  [x: string]: any;
  getInputInfo() {
    const info = this.inputInfo;
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
      info.attr.class += ` ${this.component.customClass}`;
    }
    return info;
  }

  render() {
    if (this.viewOnly || this.options.hideButtons) {
      this._visible = false;
    }
    return FieldComponent.prototype.render.call(this, this.renderTemplate('button', {
      component: this.component,
      input: this.getInputInfo(),
    }));
  }
}
