import { SELECT_BUDGET } from '../actions/index.js';

export default function (state = [], action) {
    switch (action.type) {
        case SELECT_BUDGET:
            return action.payload;
        default:
            return state;
    }
}