import _ from 'lodash';
import { FETCH_BUDGET } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_BUDGET: {
            console.log('FETCH_BUDGET:', action.type);
            return action.payload;
        }
    }

    return state;
}