import React, { Component } from 'react';
import Counter from '../data/Counter';
import Timeline from './Timeline';
import Post from './Post';

class JobsView extends Component {

  constructor(props) {
    super(props);
    // this.state = { 
    //   sortBy : "job"
    // };
    this.state = { 
      posts : this.props.posts
    };
    console.log('jobsview - state: ', this.state);
  }

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
    	<div className="main">
        <table cellSpacing="30">
          <tbody>
        		<tr id="jobsView"> 
        			{timelines}
        		</tr>
          </tbody>
        </table>
    	</div>
    )
  }
}

export default JobsView; 
