import React, { useState } from 'react';
import  './NewEmployeeForm.scss';
import { GiConfirmed, ImCancelCircle, IoMdCloseCircle } from 'react-icons/all';
import { Employee } from '../../types/employees';


interface NewEmployeeFormProps {
    createNewEmployee: (newEmployee: Employee) => void
    toCloseNewEmployeeForm: () => void
}

export const NewEmployeeForm: React.FC<NewEmployeeFormProps> = ({createNewEmployee, toCloseNewEmployeeForm}) => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const setEmployeeName = ( e: React.ChangeEvent<HTMLInputElement> ) => setName(e.currentTarget.value)
    const setEmployeeLastName = ( e: React.ChangeEvent<HTMLInputElement> ) => setLastName(e.currentTarget.value)
    const toCreateEmployee = () => {
        const newEmployee: Employee = { name, lastName, state: 'ADDED' }
        createNewEmployee(newEmployee)
        setName('')
        setLastName('')
        toCloseNewEmployeeForm()
    }

    return (
        <div className='new-employee-form__container'>
            <h2>New employee form</h2>
            <input
                type='text'
                value={name}
                name='name'
                placeholder='name'
                onChange={setEmployeeName}
            />
            <input
                type='text'
                value={lastName}
                name='lastName'
                placeholder='last name'
                onChange={setEmployeeLastName}
            />
            <div className='buttons-container'>
                <div
                    className='general-button'
                    onClick={toCloseNewEmployeeForm}
                >
                    <ImCancelCircle />
                    <h4>Cancel</h4>
                </div>
                <div
                    className='general-button'
                    onClick={toCreateEmployee}
                >
                    <GiConfirmed />
                    <h4>Submit</h4>
                </div>
            </div>
            <IoMdCloseCircle
                className='close-button'
                onClick={toCloseNewEmployeeForm}
            />
        </div>
    )
}
