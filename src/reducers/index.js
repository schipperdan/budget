import { combineReducers } from 'redux';
import BudgetsReducer from './reducer_budgets';

const rootReducer = combineReducers({
  budgets: BudgetsReducer
});

export default rootReducer;
