import React, { useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';
import { MdDeleteForever } from 'react-icons/md';
import  './EmployeeCard.scss';
import { getPersonalIcon } from '../../utils/getPersonalIcon';
import { ProgressBar } from './ProgressBar/ProgressBar';
import { DetailsBlock } from './DetailsBlock/DetailsBlock';
import { Employee } from '../../types/employees';

interface EmployeeProps {
    employee: Employee
    updateEmployee: (id: string, state: string) => void
    toDeleteEmployeeById: (id: string) => void
}

export const EmployeeCard: React.FC<EmployeeProps>  = ({employee, updateEmployee, toDeleteEmployeeById}) => {
    const [isVisibilityDescription, setVisibilityDescription] = useState(false)
    const icon = getPersonalIcon ({ name: employee.name, lastName: employee.lastName })
    const changeVisibilityDescription = () => { setVisibilityDescription(!isVisibilityDescription) }
    const toDeleteCurrentEmployee = () => {
        toDeleteEmployeeById(employee.id || '')
    }

    return (
        <div className='employee__container'>
            <div className='employee__short-info-row'>
                <div className='employee__user-icon'>{icon}</div>
                <div className='employee__name'>
                    <h3>{`${employee.name} ${employee.lastName}`}</h3>
                </div>
                <ProgressBar state={employee.state}/>
                <div className='employee__preview-button'>
                    {
                        isVisibilityDescription
                        ? <BsEyeSlash onClick={changeVisibilityDescription}/>
                        : <BsEye onClick={changeVisibilityDescription}/>
                    }
                </div>
                <div
                    className='general-button'
                    onClick={toDeleteCurrentEmployee}
                >
                    <MdDeleteForever />
                    <h4>Delete</h4>
                </div>
            </div>
            {
                isVisibilityDescription &&
                <DetailsBlock
                    employee={employee}
                    updateEmployee={updateEmployee}
                />
            }
        </div>
    )
}
