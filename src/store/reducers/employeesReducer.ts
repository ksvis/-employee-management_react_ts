import { EmployeesAction, EmployeesActionTypes, EmployeesState, } from '../../types/employees';

const initialState: EmployeesState = {
    employeesList: [],
}

export  const  EmployeesReducer = (state = initialState, action: EmployeesAction): EmployeesState => {
    switch (action.type) {
        case EmployeesActionTypes.FETCH_EMPLOYEES:
            return {
                ...state,
                employeesList: action.payload,
            }
        case EmployeesActionTypes.UPDATE_STATE_EMPLOYEE:
            return {
                ...state,
                employeesList: state.employeesList.map((employee) => {
                    return employee.id !== action.payload.id
                        ? employee
                        : {...employee, state: action.payload.state}
                })
            }
        case EmployeesActionTypes.CREATE_EMPLOYEE:
            return {
                ...state,
                employeesList: [...state.employeesList, action.payload]
            }
        case EmployeesActionTypes.DELETE_EMPLOYEE:
            return {
                ...state,
                employeesList: state.employeesList.filter( employee => employee.id !== action.payload)
            }
        default:
            return state
    }
}