import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
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

  reduce(state, action) {
    switch (action.type) {
      case ManagerActionTypes.ADD_POST:
        const id = Counter.increment();
        let newPost = action.data;
        return state.set(id, new Post(newPost));

      case ManagerActionTypes.GET_ALL_POSTS:
        let allPosts = this.TempData();
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


TempData () {
  return [
    {
      id         : "lkjsfd0932je09jflisdf",
      title      : "Plumbing Leak new data",
      author     : "Hal Goldsmith",
      job        : "1",
      description: "Behind the sink there is a pipe which is leaking very slowly. Corrosion and some framing rot. Requesting Plumber.",
      photo      : 'url here',
      date       : Date.now ,
      tags       : [ "pluber", "demo", "change order" ]
    },
    {
      id         : "kjlsdf09823740dfsklnlkdfs",
      title      : "Demo Complete new data",
      author     : "Jim Janake",
      job        : "2",
      description: "Clean demo. No problems.",
      photo      : 'url here',
      date       : Date.now ,
      tags       : [ "demo", "phase" ]
    },
    {
      id         : "lksjdf9823489kljsfdl23",
      title      : "Cabinet Door Damaged in Transit new data",
      author     : "Jason Woods",
      job        : "3",
      description: "I opened the cabinet box and the door was cracked. You can see the mark on the box where something hit it.",
      photo      : 'url here',
      date       : Date.now ,
      tags       : [ "kitchen", "order", "shipping", "problem" ]
    },
    {
      id         : "928374kl23lkjlj3kljk324",
      title      : "Job Finish",
      author     : "Joaquin Phoenix nd",
      job        : "4",
      description: "Clinet is very happy. I am too. long drive home.",
      photo      : 'url here',
      date       : Date.now ,
      tags       : [ "kitchen", "complete", "final", "out of here" ]
    },
    {
      id         : "928374kl232342kj34kj3kljk324",
      title      : "Setup",
      author     : "Dmtir Wolf",
      job        : "5",
      description: "Lots of plastic to cover up bed. House is dirty. Not very happy.",
      photo      : 'url here',
      date       : Date.now ,
      tags       : [ "bathroom", "dirt", "gross", "pay me more"]
    }
    ]
  }
}

export default new PostStore();