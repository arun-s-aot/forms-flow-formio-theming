import editForm from './SelectBoxes.form';
declare const SelectBoxesComponent: import("formiojs").ClassWithEditForm<typeof import("formiojs/types/components/_classes/field/field").Field>;
export default class FormsflowFormioThemeSelectBoxesComponent extends SelectBoxesComponent {
    static editForm: typeof editForm;
}
export {};
