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
  }
};

export default Actions;