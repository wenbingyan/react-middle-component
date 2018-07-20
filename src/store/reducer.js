import * as Types from './action-types';

export default function (state={number:0},action) {
    switch (action.type){
        case Types.ADD:
            return {number:state.number+action.amount}
        case Types.MINUS:
            return {number:state.number-action.payload}
    }
    return state
}