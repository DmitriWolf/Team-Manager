import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import request from 'superagent';
import ManagerActions from './ManagerActions';
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

  getPosts() {
    request
      .get('/api/post')
      .end(function(err, res){
        if(err) {
          console.log('error: ', err);
          return;
        }
        ManagerActions.updatePosts(res.body);
      });
  } 

  reduce(state, action) {
    switch (action.type) {
      case ManagerActionTypes.ADD_POST:
        const id = Counter.increment();
        let newPost = action.data;
        return state.set(id, new Post(newPost));

      case ManagerActionTypes.GET_ALL_POSTS:
        this.getPosts();
        return state;

      case ManagerActionTypes.UPDATE_POSTS:
        let allPosts = action.data;
        let mutableState = state.withMutations(function (tempState) {
          allPosts.map(function(post) {
            let newId = Counter.increment();
            tempState.set(newId, new Post(post));
          })
        });
        return mutableState;

      default:
        return state;
    }
  }
}

export default new PostStore();