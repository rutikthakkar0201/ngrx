import { createFeatureSelector, createSelector } from '@ngrx/store';
export const sendUserData = 'userData';
export const getUserData = createFeatureSelector<any>(sendUserData);

export const getCounter = createSelector(getUserData, (stat) => {
  return stat;
});
