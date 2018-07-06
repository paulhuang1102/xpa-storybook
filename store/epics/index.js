import { combineEpics } from 'redux-observable';
import countEpic from '../epics/count';

const rootEpic = combineEpics(
    ...countEpic
);

export default rootEpic;