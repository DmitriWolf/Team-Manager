'use strict';

import Immutable from 'immutable';

const Post = Immutable.Record({
	_id         : '',
	title       : '',
	author      : '',
	job         : '',
	description : '',
	photo       : '',
	imageDataUrl: '',
	date        :  Date.now,
	tags        : []
});

export default Post;