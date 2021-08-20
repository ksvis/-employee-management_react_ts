import React from 'react';
import  './EmployeesList.scss';
import { IoMdAddCircle } from 'react-icons/all';
import { EmployeeCard } from '../EmployeeCard/EmployeeCard';
import { Employee } from '../../types/employees';

export interface EmployeesListProps {
    employees: Employee[]
    updateEmployee: (id: string, state: string) => void
    toOpenNewEmployeeForm: () => void
    toDeleteEmployeeById: (id: string) => void
}

export const EmployeesList: React.FC<EmployeesListProps>  = ({employees , updateEmployee, toOpenNewEmployeeForm, toDeleteEmployeeById}) => {
    const employeesList = employees?.map( employee => {
        return <EmployeeCard
            key={employee.id}
            employee={employee}
            updateEmployee={updateEmployee}
            toDeleteEmployeeById={toDeleteEmployeeById}
        />
    })

    return (
        <div className='employees-list__container'>
            <div className='employees-list__header-panel'>
                <h2 className='employees-list__title'>Employees</h2>
                <div
                    className='general-button'
                    onClick={toOpenNewEmployeeForm}
                >
                    <IoMdAddCircle />
                    <h4>Add employee</h4>
                </div>
            </div>
            {employeesList}
        </div>
    )
}
