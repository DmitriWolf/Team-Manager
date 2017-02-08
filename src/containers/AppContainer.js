import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import PostStore from '../data/PostStore';

function getStores() {
  return [
    PostStore,
  ];
}

function getState() {
  return {
    posts: PostStore.getState(),
  };
}

export default Container.createFunctional(AppView, getStores, getState);