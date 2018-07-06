import * as types from '../actionTypes/count';

export const countAdd$ = (payload) => {
    return {
        type: types.COUNT_ADD$,
        payload
    }
}

export const countUpdate = (payload) => {
    return {
        type: types.COUNT_UPDATE,
        payload
    }
}

export const countInit$ = () => {
    return {
        type: types.COUNT_INIT$
    }
}