import { AsyncValidatorFn, ValidatorFn } from '@angular/forms';

export interface IAbstractControlTyped {
  seed: any;
  validators?: ValidatorFn | ValidatorFn[] | null;
  asyncValidators?: AsyncValidatorFn | AsyncValidatorFn[] | null;
}
