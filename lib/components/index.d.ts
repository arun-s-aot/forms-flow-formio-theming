import FormsflowFormioThemeSelectComponent from './Select';
import FormsflowFormioThemeButtonComponent from './button/Button';
import FormsflowFormioThemeCheckboxComponent from './Checkbox/Checkbox';
import FormsflowFormioThemeSelectBoxesComponent from './selectboxes/SelectBoxes';
declare const _default: {
    select: typeof FormsflowFormioThemeSelectComponent;
    radio: import("formiojs").ClassWithEditForm<typeof import("formiojs/types/components/_classes/field/field").Field>;
    button: typeof FormsflowFormioThemeButtonComponent;
    checkbox: typeof FormsflowFormioThemeCheckboxComponent;
    selectboxes: typeof FormsflowFormioThemeSelectBoxesComponent;
};
export default _default;
