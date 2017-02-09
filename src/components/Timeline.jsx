import React, { Component } from 'react';
import Post from './Post';

class Timeline extends Component {
render() {
  var posts = this.props.posts.toArray();

    return (
    	<div className="main">
    		<h2>Timeline</h2>
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