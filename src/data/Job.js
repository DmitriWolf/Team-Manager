'use strict';

import Immutable from 'immutable';

const Job = Immutable.Record({
	_id       : '',
	title     : '',
	address1  : '',
	address2  : '',
	city      : '',
	state     : '',
	zip       : '',
	date      : Date.now,
	owner     : '',
	startDate : Date,
	supervisor: '',
	installer : ''
});

export default Job;