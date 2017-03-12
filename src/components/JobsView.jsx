import React, { Component } from 'react';
import Counter from '../data/Counter';
import Timeline from './Timeline';
import Post from './Post';

class JobsView extends Component {

  sort(collection, sortBy) {
    var sortedRecords = {};

    collection.map(function(record) { 
    	var recordName = record[sortBy];
    	sortedRecords[recordName] = sortedRecords[recordName]  || [];
    	sortedRecords[recordName].push(record);
    })

    return sortedRecords;
  }

  render() {
    let sortedPosts = this.sort(this.props.posts, "job");
    var timelines = Object.keys(sortedPosts).map(function(i) {
      return ( 
      	<Timeline 
      		{...sortedPosts[i]} 
          key={Counter.increment()}
        />
      )
    });

    return (
    	<div className="main" id="jobsView"> 
        {timelines}
    	</div>
    )
  }
}

export default JobsView; 
