import ManagerActionTypes from './ManagerActionTypes';
import ManagerDispatcher from './ManagerDispatcher';

const Actions = {
  addPost(data) {
    ManagerDispatcher.dispatch({
      type: ManagerActionTypes.ADD_POST,
      data,
    });
  },
};

export default Actions;