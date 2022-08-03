import { Components } from 'formiojs';

const SelectComponent = Components.components.select as any;

export default class USWDSSelectComponent extends SelectComponent {
  choicesOptions() {
    const choicesOptions = super.choicesOptions();
    choicesOptions.classNames.containerInner += ' formsflow-select maxw-full';
    return choicesOptions;
  }
}
