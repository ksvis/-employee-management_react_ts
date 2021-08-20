import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as EmployeesActionCreator from '../store/actions/employees';

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(EmployeesActionCreator, dispatch)
}