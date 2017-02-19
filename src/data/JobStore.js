import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import request from 'superagent';
import ManagerActions from './ManagerActions';
import ManagerActionTypes from './ManagerActionTypes';
import ManagerDispatcher from './ManagerDispatcher';
import Job from './Job';
import Counter from './Counter';

class JobStore extends ReduceStore {
  constructor() {
    super(ManagerDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  getJobs() {
    console.log('JobStore - getJobs');
    request
      .get('/api/job')
      .end(function(err, res){
        if(err) {
          console.log('error: ', err);
          return;
        }
    console.log('JobStore - getJobs - result: ', res.body);
        ManagerActions.updateJobs(res.body);
      });
  } 

  reduce(state, action) {
    switch (action.type) {
      case ManagerActionTypes.ADD_JOB:
        const id = Counter.increment();
        let newJob = action.data;
        return state.set(id, new Job(newJob));

      case ManagerActionTypes.GET_ALL_JOBS:
        this.getJobs();
        return state;

      case ManagerActionTypes.UPDATE_JOBS:
        let allJobs = action.data;
        let mutableState = state.withMutations(function (tempState) {
          allJobs.map(function(job) {
            let newId = Counter.increment();
            tempState.set(newId, new Job(job));
          })
        });
        return mutableState;

      default:
        return state;
    }
  }
}

export default new JobStore();