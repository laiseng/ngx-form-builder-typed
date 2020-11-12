import { IAbstractControlTyped } from './i-abstract-control-typed';

export type FormControlTypedConfig<T> = {
  [P in keyof T]?: IAbstractControlTyped;
};
