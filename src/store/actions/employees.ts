import { Employee, EmployeesActionTypes } from '../../types/employees';
import { Dispatch } from 'redux';
import axios from 'axios';

export const fetchEmployees = () => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get('http://localhost:8000/employees')
            dispatch({type: EmployeesActionTypes.FETCH_EMPLOYEES, payload: response.data})
        } catch (e) {
            console.log('error', e)
        }
    }
}

export const updateEmployeeStateById = (employee: Employee) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.patch(
                `http://localhost:8000/employees/${employee.id}`, {state: employee.state},
            )
            response.status === 200 &&
            dispatch({type: EmployeesActionTypes.UPDATE_STATE_EMPLOYEE, payload: employee})
        } catch (e) {
            console.log('error', e)
        }
    }
}

export const createEmployee = (employee: Employee) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.post(
                `http://localhost:8000/employees/`, employee,
            )
            const successResponse = response.status === 200 || response.status === 201
            successResponse &&
            dispatch({type: EmployeesActionTypes.CREATE_EMPLOYEE, payload: employee})
        } catch (e) {
            console.log('error', e)
        }
    }
}

export const deleteEmployeeById = (id: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.delete(`http://localhost:8000/employees/${id}`)
            response.status === 200 &&
            dispatch({type: EmployeesActionTypes.DELETE_EMPLOYEE, payload: id})
        } catch (e) {
            console.log('error', e)
        }
    }
}