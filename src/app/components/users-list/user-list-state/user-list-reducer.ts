import { createReducer, on } from '@ngrx/store';
import { sendUserData } from './user-list-actions';
import { initialState } from './user-list-state';

const _sendUserDataReducer = createReducer(
  initialState,
  on(sendUserData, (state, action) => {
    return {
      userData: [...state.userData, action.value],
    };
  })
);

export function sendUserDataReducer(state: any, action: any) {
  return _sendUserDataReducer(state, action);
}
