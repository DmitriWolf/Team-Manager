import React, { Component } from 'react';
import Post from './Post';

class Timeline extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      sortBy : "job"
    };
    console.log('Timeline - constructor - props: ', this.props);
    console.log('Timeline - constructor - state: ', this.state);
  }

sort(collection, sortBy) {
  var jobsList = [];

  collection.map(function(record) { 
  var recordName = record[sortBy];
  jobsList[recordName] = jobsList[recordName]  || [];
   jobsList[recordName].push(record);
  })

  console.log("sorting by ", sortBy,  ", jobsList:", jobsList)
}

render() {
  console.log('timeline - this.props: ', this.props);

  var posts = this.props.posts;

  this.sort(posts, "job");
  this.sort(posts, "title");

    return (
    	<div className="main">
        <table cellSpacing="30">
          <tbody>
        		<tr id="timeline"> 
              {posts.map(post => (
                <Post
                  key={post.id}
                  post={post}
                />
              ))}
        		</tr>
          </tbody>
        </table>
    	</div>
    )
  }
}

export default Timeline; 