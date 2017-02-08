import React, { Component } from 'react';
import EntryForm from './EntryForm';
import Entry from './Entry';

class Timeline extends Component {
  render() {
    var posts = this.props.posts.toArray();

    return (
    	<div className="main">
    		<h2>Timeline</h2>
    		<ul id="timeline"> 
                {posts.map(post => (
                  <Entry
                    key={post.id}
                    post={post}
                  />
                ))}
    		  <li className="add-new-form"><EntryForm /></li>
    		</ul>
    	</div>
    )
  }
}

export default Timeline; 