
export interface Employee {
    id?: string
    name: string
    lastName: string
    state: string
}

export interface EmployeesState {
    employeesList: Employee[]
}

export interface FetchEmployeesAction {
    type: EmployeesActionTypes.FETCH_EMPLOYEES
    payload: Employee[]
}

export enum EmployeesActionTypes {
    FETCH_EMPLOYEES = 'FETCH_EMPLOYEES',
    UPDATE_STATE_EMPLOYEE = 'UPDATE_STATE_EMPLOYEE',
    CREATE_EMPLOYEE = 'CREATE_EMPLOYEE',
    DELETE_EMPLOYEE = 'DELETE_EMPLOYEE',
}

export interface EmployeesAction {
    type: string
    payload?: any
}