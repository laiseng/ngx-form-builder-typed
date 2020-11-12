import { AbstractControl } from '@angular/forms';

export type ControlTyped<T> = {
  [P in keyof T]?: AbstractControl;
};
