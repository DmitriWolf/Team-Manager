import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
    	<div className="footer">	
    		<form id="send-message">
				  <input id="m" type="text" placeholder="Type Here" />
				  <div>
				    <button value="" className="send">Send</button>
				    <div className="filebutton">
				    	<input type="file" id="imagefile" accept="image/*"></input>
				    	<div className="label">Add Photo</div>
				    </div>
				  </div>
				</form>
    	</div>
    )
  }
}

export default Footer; 