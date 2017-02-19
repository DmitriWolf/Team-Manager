import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import PostStore from '../data/PostStore';
import JobStore from '../data/JobStore';

function getStores() {
  return [
    PostStore,
    JobStore
  ];
}

function getState() {
  return {
    posts: PostStore.getState(),
    jobs: JobStore.getState()
  };
}

export default Container.createFunctional(AppView, getStores, getState);