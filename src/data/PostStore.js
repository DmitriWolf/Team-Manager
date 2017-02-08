import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import ManagerActionTypes from './ManagerActionTypes';
import ManagerDispatcher from './ManagerDispatcher';
import Post from './Post';
import Counter from './Counter';

class PostStore extends ReduceStore {
  constructor() {
    super(ManagerDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case ManagerActionTypes.ADD_POST:
        const id = Counter.increment();
        let newPost = {
          id         : id,
          title      : action.data.title,
          author     : action.data.author,
          description: action.data.description,
          photo      : action.data.photo,
          tags       : action.data.tags
        };
        return state.set(id, new Post(newPost));

      default:
        return state;
    }
  }
}

export default new PostStore();