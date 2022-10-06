import { userData } from '../user-list-model/user-list-model';
export interface userDataState {
  userData: userData[];
}

const userList = [
  { id: 1, firstName: 'John', lastName: 'Doe', profession: 'Doctor' },
  { id: 2, firstName: 'Oliver', lastName: 'Patterson', profession: 'Software Developer' },
  { id: 3, firstName: 'Paul', lastName: 'Specter', profession: 'Lawyer' },
  { id: 4, firstName: 'James', lastName: 'Bond', profession: 'Engineer' },
  { id: 5, firstName: 'Ron', lastName: 'Wisley', profession: 'Doctor' },
  { id: 6, firstName: 'Harry', lastName: 'Potter', profession: 'Singer' },
];

export const initialState = {
  userData: userList,
};
