import React, { Component } from 'react';
import PostForm from './PostForm';

class Footer extends Component {
  render() {
    return (
    	<div className="footer">	
    		<PostForm addPost={this.props.addPost} />
    	</div>
    )
  }
}

export default Footer; 