import { FormGroup } from '@angular/forms';

export type ExcludeFormGroupControls = Exclude<FormGroup, 'controls' | 'value'>;
