import { Injectable } from '@angular/core';

import { AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IAbstractControlTyped } from './i-abstract-control-typed';
import { FormControlTypedConfig } from './form-control-typed-config';
import { FormGroupTyped } from './i-form-group-typed';

@Injectable({
  providedIn: 'root',
})
export class FormBuilderTypedService extends FormBuilder {
  constructor() {
    super();
  }

  group<T>(
    controlConfig: FormControlTypedConfig<T>,
    options?:
      | AbstractControlOptions
      | {
          [key: string]: any;
        }
      | null
  ): FormGroupTyped<T> {
    let controls: { [key: string]: AbstractControl } = {};
    Object.keys(controlConfig).forEach((fieldName) => {
      let setting = controlConfig[fieldName] as IAbstractControlTyped;
      controls[fieldName] = new FormControl(setting.seed);
      if (setting.validators) {
        controls[fieldName].setValidators(setting.validators);
      }

      if (setting.asyncValidators) {
        controls[fieldName].setAsyncValidators(setting.asyncValidators);
      }
    });

    return new FormGroup(controls, options) as FormGroupTyped<T>;
  }
}
