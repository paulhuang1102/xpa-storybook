import { ofType } from 'redux-observable';
import * as types from '../actionTypes/count';
import { countUpdate } from '../actions/count';
import { map, mergeMap, catchError } from 'rxjs/operators';
import ajax from 'universal-rx-request';


const countInitEpic = (action$, state$) => {
    return action$
        .pipe(
            ofType(types.COUNT_INIT$),
            mergeMap(action => {
                return ajax({ method: 'get', url: 'https://api.github.com/repos/zeit/next.js' })
            }),
            map(res => {
                return countUpdate(res.body.stargazers_count);
            }),
            catchError((err, obs) => {
                console.log('ERRORRRRRRRRRRRRR', err);
                return obs;
            })
        )
}

const countAddEpic = (action$, state$) => {
    return action$
        .pipe(
            ofType(types.COUNT_ADD$),
            map(action => {
                const { count } = state$.value.count
                return countUpdate(count + 1);
            })
        );
};

export default [
    countAddEpic,
    countInitEpic
];