import * as types from '../actionTypes/count';

const initialState = {
    count: 0
}

const count = (state = initialState, action = {}) => {
    switch (action.type)
    {
        case types.COUNT_UPDATE:
            return {
                ...state,
                count: action.payload
            }
        default:
            return state;
    }
}

export default count;