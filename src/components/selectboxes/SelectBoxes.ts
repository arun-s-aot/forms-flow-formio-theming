import { Components } from 'formiojs';
import editForm from './SelectBoxes.form';

const SelectBoxesComponent = Components.components.selectboxes;

export default class FormsflowFormioThemeSelectBoxesComponent extends SelectBoxesComponent {
  public static editForm = editForm
}
