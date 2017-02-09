'use strict';

import Immutable from 'immutable';

const Post = Immutable.Record({
  id  			 : '',
	title      : '',
	author     : '',
	job        : '',
	description: '',
	photo      : '',
	date       :  Date.now,
	tags       : []
});

export default Post;