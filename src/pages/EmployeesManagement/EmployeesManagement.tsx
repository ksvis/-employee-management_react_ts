import React, { useEffect, useState } from 'react';
import  './EmployeesManagement.scss';
import { EmployeesList } from '../../components/EmployeesList/EmployeesList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import { NewEmployeeForm } from '../../components/NewEmployeeForm/NewEmployeeForm';
import { Employee } from '../../types/employees';

export const EmployeesManagement: React.FC = ( ) => {
    const [ isVisibilityNewEmployeeForm, setVisibilityNewEmployeeForm ] = useState(false)
    const { employeesList } = useTypedSelector( state => state.employees)
    const { fetchEmployees, updateEmployeeStateById, createEmployee, deleteEmployeeById } = useActions()

    useEffect(() => {
        fetchEmployees()
    }, [])

    const updateEmployee = (id: string, state: string) => {
        const currentEmployee = employeesList.find( employee => employee.id === id )
        if(currentEmployee !== undefined) {
            currentEmployee.state = state
            updateEmployeeStateById(currentEmployee)
        }
    }
    const toDeleteEmployeeById = (id: string) => {
        deleteEmployeeById(id)
    }
    const toOpenNewEmployeeForm = () => {
        setVisibilityNewEmployeeForm(true)
    }
    const toCloseNewEmployeeForm = () => {
        setVisibilityNewEmployeeForm(false)
    }
    const createNewEmployee = (newEmployee:Employee) => createEmployee(newEmployee)


    return (
        <div className='employees-management-container'>
            <div className='notification-block'>
            </div>
            {
                isVisibilityNewEmployeeForm
                && <NewEmployeeForm
                    createNewEmployee={createNewEmployee}
                    toCloseNewEmployeeForm={toCloseNewEmployeeForm}
                />
            }
            {
                employeesList &&
                <EmployeesList
                    employees={employeesList}
                    updateEmployee={updateEmployee}
                    toDeleteEmployeeById={toDeleteEmployeeById}
                    toOpenNewEmployeeForm={toOpenNewEmployeeForm}
                />
            }
        </div>
    )
}
