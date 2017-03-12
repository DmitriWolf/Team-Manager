import React, { Component } from 'react';
import Counter from '../data/Counter';
import Timeline from './Timeline';
import Post from './Post';

class JobsView extends Component {

  sort(sortBy) {
    let jobs = this.props.jobs;
    let posts = this.props.posts;
    if(!posts) return null;

    let sortedRecords = {};
    switch (sortBy) {
      case "job":
        this.props.posts.map(function(record) { 
          let jobId = record[sortBy];
          let job = jobs.find(function(obj){return obj.get('_id') === jobId;});
          if(job) {
            let recordName = job["title"];
            sortedRecords[recordName] = sortedRecords[recordName]  || [];
            sortedRecords[recordName].push(record);
          } 
        });
        break;
      default:
        sortedRecords = { "All Jobs": this.props.posts.toArray() };
        break;
    }
    return sortedRecords;
  }

  render() {
    let sortedPosts = this.sort(this.props.sortBy);
    let timelines = Object.keys(sortedPosts).map(function(i) {
      return ( 
      	<Timeline 
      		posts={sortedPosts[i]} 
          title={i}
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
