import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import BudgetList from '../containers/budget_list';

export default class App extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <BudgetList />
            </div>
        )
    }
};

