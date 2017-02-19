import ManagerActionTypes from './ManagerActionTypes';
import ManagerDispatcher from './ManagerDispatcher';

const Actions = {
  addPost(data) {
    ManagerDispatcher.dispatch({
      type: ManagerActionTypes.ADD_POST,
      data
    });
  },
  updatePosts(data) {
    ManagerDispatcher.dispatch({
      type: ManagerActionTypes.UPDATE_POSTS,
      data
    });
  },
  addJob(data) {
    console.log('ManagerActions - addjob for data: ', data);
    ManagerDispatcher.dispatch({
      type: ManagerActionTypes.ADD_JOB,
      data
    });
  },
  updateJobs(data) {
    ManagerDispatcher.dispatch({
      type: ManagerActionTypes.UPDATE_JOBS,
      data
    });
  }
};

export default Actions;