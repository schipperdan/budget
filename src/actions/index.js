export const FETCH_BUDGET = "FETCH_BUDGET";

// todo: use axios to call an api to get the budgets by a search term

export function fetchBudgets(term) {
    return {
        type: FETCH_BUDGET,
        payload:
        [
            { budgetName: "1-1-2000" },
            { budgetName: "2-1-2000" },
            { budgetName: "3-1-2000" }
        ]
    }
}


