import _ from 'lodash';

export const FETCH_BUDGET = "FETCH_BUDGET";
export const SELECT_BUDGET = "SELECT_BUDGET";

// todo: use axios to call an api to get the budgets by a search term
function fetchBudgetNames(term) {
    var budgets = [
        { budgetName: "1-1-2000" },
        { budgetName: "2-1-2000" },
        { budgetName: "3-1-2000" }
    ];

    var result =  _.filter(
        budgets,
        budget => budget.budgetName.match(`\.*${term}\.*`)
    );

    return result;
};

export function fetchBudgets(term) {
    return {
        type: FETCH_BUDGET,
        payload: fetchBudgetNames(term)
    }
}

export function selectBudget(budget) {
    return {
        type: SELECT_BUDGET,
        payload: budget
    }
}


