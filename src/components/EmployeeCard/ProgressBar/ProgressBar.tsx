import React from 'react';
import classNames from 'classnames';
import  './ProgressBar.scss';
import { stateList } from '../../../constants/mockDate';

export interface ProgressBarProps {
    state: string
}

export const ProgressBar: React.FC<ProgressBarProps>  = ({state}) => {
    const stateElement = stateList?.map( item => {
        return (
            <div
                key={item.step}
                className={classNames(
                'state-element__container',
                { active: item.name === state})
            }>
                <p>{item.name}</p>
            </div>
        )
    })

    return (
        <div className='progressBar__container'>
            {stateElement}
        </div>
    )
}
