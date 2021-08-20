import React from 'react';
import { RiExchangeLine } from 'react-icons/ri';
import  './DetailsBlock.scss';
import { Employee } from '../../../types/employees';
import { stateList } from '../../../constants/mockDate';

interface DetailsBlockProps {
    employee: Employee
    updateEmployee: (id: string, state: string) => void
}

export const DetailsBlock: React.FC<DetailsBlockProps> = ({employee, updateEmployee}) => {
    const currentStep = stateList.findIndex( state => state.name === employee.state)
    const checkNextStep = (): number => {
        if (currentStep >= 0 && currentStep < stateList.length-1) return currentStep + 1
        if (currentStep === stateList.length-1) return currentStep - 1
        return 0
    }
    const nextStep = checkNextStep()
    const toUpdateEmployee = () => updateEmployee(employee.id || '', stateList[nextStep].name)
    return (
        <div className='employee-details__block'>
            <div>
                Details info
            </div>
            <div
                className='general-button'
                onClick={toUpdateEmployee}
            >
                <RiExchangeLine />
                <h4>to change status</h4>
            </div>
        </div>
    )
}
