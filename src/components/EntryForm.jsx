import React, { Component } from 'react';

class EntryForm extends Component {
	constructor(props) {
    super(props);
    this.clearForm();
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  clearForm() {
    this.state = {
    	title: '',
    	job: '',
    	description: '',
    	tags: '',
    	imagefile: undefined
    };
  }

	handleInputChange(event) {
    const target = event.target;
		console.log('input event: ', target.value, target.name);
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

	handleSubmit(event) {
    event.preventDefault();
    this.props.addPost(this.state);
    this.clearForm();
  }

  render() {
    return (
    	<div className="entry-form">
    		<form onSubmit={this.handleSubmit.bind(this)}>Entry Form
				  <input 
				  	id="title" 
				  	name="title"
				  	type="text" 
				  	placeholder="Title" 
				  	value={this.state.title}
            onChange={this.handleInputChange} />
		    	<label htmlFor="job">Job Name</label>
		    	<select 
		    		id="job" 
		    		name="job"
		    		value={this.state.job}
            onChange={this.handleInputChange} >
					  <option value="1">Billings</option>
					  <option value="3">Souter</option>
					  <option value="4">Parkinson</option>
					  <option value="7">Ploetz</option>
					</select>
				  <textarea 
				  	id="description" 
				  	name="description"
				  	value={this.state.description}
            onChange={this.handleInputChange} 
				  	placeholder="Description" />
				  <input 
				  	id="tags" 
				  	name="tags"
				  	value={this.state.tags}
				  	type="text" 
            onChange={this.handleInputChange} 
				  	placeholder="Tags" />
		    	<label htmlFor="imagefile">Add Photo</label>
		    	<input  
		    		id="imagefile" 
		    		type="file" 
		    		name="imagefile"
				  	value={this.state.imagefile}
            onChange={this.handleInputChange}
		    		accept="image/*"></input>
				  <input type="submit" value="Submit" />
    		</form>
    	</div>
    )
  }
}

export default EntryForm; 