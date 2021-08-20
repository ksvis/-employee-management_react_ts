import { combineReducers } from 'redux';
import { EmployeesReducer } from './employeesReducer';

export const rootReducer = combineReducers({
    employees: EmployeesReducer,
})

export type RootState = ReturnType<typeof rootReducer>