import { ExcludeFormGroupControls } from './exclude-form-group-controls';
import { ControlTyped } from './controls-typed';

export interface FormGroupTyped<T> extends ExcludeFormGroupControls {
  controls: ControlTyped<T>;
  readonly value: T;
}
