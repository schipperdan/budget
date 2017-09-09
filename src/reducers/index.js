import { combineReducers } from 'redux';
import BudgetsReducer from './reducer_budgets';
import SelectedBudgetReducer from './reducer_selected_budget';

const rootReducer = combineReducers({
  budgets: BudgetsReducer,
  selectedBudget: SelectedBudgetReducer
});

export default rootReducer;
