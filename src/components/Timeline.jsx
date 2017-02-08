import React, { Component } from 'react';
import EntryForm from './EntryForm';
import Entry from './Entry';

class Timeline extends Component {
  render() {
    var posts = this.props.posts.toArray();

    return (
    	<div className="main">
    		<h2>Timeline</h2>
        <table cellspacing="30">
          <tbody>
        		<tr id="timeline"> 
                    {posts.map(post => (
                      <Entry
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