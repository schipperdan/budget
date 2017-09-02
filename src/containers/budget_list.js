import React, { Component } from 'react';
import { connect } from 'react-redux';

class BudgetList extends Component {
    render() {
        return (
            <ul className="list-group sm-col-2">
                {this.renderBudgets()}
            </ul>
        )
    }

    renderBudgets() {
        return this.props.budgets.map((budget) => {
            return (
                <li className="list-group-item" key={budget.budgetName}>{budget.budgetName}</li>
            )
        })
    }
}

function mapStateToProps(state) {
    return {
        budgets: state.budgets
    }
}

export default connect(mapStateToProps)(BudgetList);