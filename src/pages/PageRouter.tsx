import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { EmployeesManagement } from './EmployeesManagement/EmployeesManagement';
import { HomePage } from './HomePage/HomePage';


export const PagesRouter: React.FC = () => {
    return (
        <>
            <Switch>
                <Route
                    exact
                    path='/'
                    component={HomePage}
                />
                <Route
                    exact
                    path='/employees'
                    component={EmployeesManagement}
                />
            </Switch>
        </>
    )
}