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
    	job: '3',
    	description: '',
    	tags: '',
    	imagefile: undefined
    };
  }

	handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

	handleSubmit(event) {
    event.preventDefault();
    if(this.state.tags) {
    	let tags = this.state.tags.split(',');
    	this.state.tags = tags;
    }
    this.props.addPost(this.state);
    this.clearForm();
  }

  render() {
    return (
    	<div className="entry-form">
    		<form onSubmit={this.handleSubmit.bind(this)}>
    		  <span className="form-title">Entry Form</span>
				  <input 
				  	id="title" 
				  	name="title"
				  	type="text" 
				  	placeholder="Title" 
				  	value={this.state.title}
            onChange={this.handleInputChange} />
		    	<label htmlFor="job">Job Name</label>
		    	<div className="select">
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
					</div>
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
				  <input id="submit" type="submit" value="Submit" />
    		</form>
    	</div>
    )
  }
}

export default EntryForm; 