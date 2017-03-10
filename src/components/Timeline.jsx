import React, { Component } from 'react';
import Post from './Post';

class Timeline extends Component {
  

  render() {
    var posts = this.props;
    var jobId = "";
    var postsDisplay = Object.keys(this.props).map(function(i) {
      let post = posts[i];
      jobId = post._id;
      return ( 
        <Post
          key={post.id}
          post={post}
        />
      )
    });

    return (
    	<div className="main">
        <h3>{jobId}</h3>
        <table cellSpacing="30">
          <tbody>
        		<tr id="timeline"> 
              {postsDisplay}
        		</tr>
          </tbody>
        </table>
    	</div>
    )
  }
}

export default Timeline; 