import React, { Component } from 'react';
import EntryForm from './EntryForm';

class Footer extends Component {
  render() {
    return (
    	<div className="footer">	
    		<EntryForm addPost={this.props.addPost} />
    	</div>
    )
  }
}

export default Footer; 