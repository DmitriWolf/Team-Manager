import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
    	<header>
    		<h1>Team Manager</h1>
    		<div className="header-controls">
		    	<span className="header-label">Sort By: </span>
		    	<button id="sortby-job" onClick={this.props.sortBy.bind(this)}>Job</button>
		    	<button id="sortby-installer" onClick={this.props.sortBy.bind(this)}>Installer</button>
		    </div>
    	</header>
    )
  }
}

export default Header; 