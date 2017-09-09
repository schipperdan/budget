import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBudget } from '../actions/index.js';

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

            console.log(this.props.selectedBudget);
            return (
                <li
                    className={(this.props.selectedBudget === budget) ? "list-group-item active" : "list-group-item"}
                    key={budget.budgetName}
                    onClick={() => this.props.selectBudget(budget)}>
                    {budget.budgetName}
                </li>
            )
        })
    }
}

function mapStateToProps(state) {
    return {
        budgets: state.budgets,
        selectedBudget: state.selectedBudget
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectBudget }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BudgetList);