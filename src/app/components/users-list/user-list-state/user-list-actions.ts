import { createAction, props } from '@ngrx/store';

export const sendUserData = createAction(
  'sendUserData',
  props<{ value: any }>()
);
