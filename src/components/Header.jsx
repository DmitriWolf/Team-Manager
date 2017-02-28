import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
    	<header>
    		<h1>Team Manager</h1>
    		<div className="header-controls">
		    	<span className="header-label">Sort By: </span>
		    	<button>Job</button>
		    	<button>Installer</button>
		    </div>
    	</header>
    )
  }
}

export default Header; 