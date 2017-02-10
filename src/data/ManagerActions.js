import ManagerActionTypes from './ManagerActionTypes';
import ManagerDispatcher from './ManagerDispatcher';

const Actions = {
  addPost(data) {
    ManagerDispatcher.dispatch({
      type: ManagerActionTypes.ADD_POST,
      data
    });
  },
  getAllPosts() {
    ManagerDispatcher.dispatch({
      type: ManagerActionTypes.GET_ALL_POSTS
    });
  }
};

export default Actions;