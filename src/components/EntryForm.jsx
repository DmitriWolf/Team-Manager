import React, { Component } from 'react';

class EntryForm extends Component {
  render() {
    return (
    	<div className="entry-form">
    		<form>Entry Form
				  <input id="title" type="text" placeholder="Title" />
		    	<label htmlFor="job">Job Name</label>
		    	<select id="job">
					  <option value="1">Billilngs</option>
					  <option value="3">Souter</option>
					  <option value="4">Parkinson</option>
					  <option value="7">Ploetz</option>
					</select>
				  <input id="description" type="text" placeholder="Description" />
				  <input id="tags" type="text" placeholder="Tags" />
		    	<label htmlFor="imagefile">Add Photo</label>
		    	<input type="file" id="imagefile" accept="image/*"></input>
				  <button value="" className="upload">Upload</button>
    		</form>
    	</div>
    )
  }
}

export default EntryForm; 