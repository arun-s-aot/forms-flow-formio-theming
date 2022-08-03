import { Formio } from 'formiojs/formio.form.js';
import Flatpickr from 'flatpickr';
window.flatpickr = window['flatpickr-css'] = Flatpickr;
import formsflowFormioTheme from '@formio/formsflowFormioTheme';
import VPAT from '@formio/vpat';
import Premium from '@formio/premium';
formsflowFormioTheme.version = __VERSION__;
Formio.formsflowFormioTheme = formsflowFormioTheme;

// Use modules.
Formio.use([formsflowFormioTheme, VPAT, Premium]);
Formio.Templates.framework = 'formsflowFormioTheme';
