import React, { Component } from 'react';

class JobForm extends Component {
	constructor(props) {
    super(props);
    this.clearForm();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = { 
    	_id       : '',
			title     : '',
			address1  : '',
			address2  : '',
			city      : '',
			state     : '',
			zip       : '',
			date      : Date.now,
			owner     : '',
			startDate : Date,
			supervisor: '',
			installer : ''
    };
  }

  clearForm() {
    this.state = {
  		_id       : '',
			title     : '',
			address1  : '',
			address2  : '',
			city      : '',
			state     : '',
			zip       : '',
			date      : Date.now,
			owner     : '',
			startDate : Date,
			supervisor: '',
			installer : ''
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    let value = target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addJob(this.state);
    this.props.displayJobForm(false);
    this.clearForm();
  }

  render() {    
    return (
    	<div className="Job-form">
    		<form onSubmit={this.handleSubmit.bind(this)}>
    		  <span className="form-title">Job Form</span>
				  <input 
				  	id="title" 
				  	name="title"
				  	type="text" 
				  	placeholder="Title" 
				  	value={this.state.title}
                    onChange={this.handleInputChange} />
		    	
				  <input 
				  	id="address1" 
				  	name="address1"
				  	type="text" 
				  	placeholder="Address 1" 
				  	value={this.state.address1}
                    onChange={this.handleInputChange} />
		    	
				  <input 
				  	id="address2" 
				  	name="address2"
				  	type="text" 
				  	placeholder="Address 2" 
				  	value={this.state.address2}
                    onChange={this.handleInputChange} />
		    	
				  <input 
				  	id="city" 
				  	name="city"
				  	type="text" 
				  	placeholder="City" 
				  	value={this.state.city}
                    onChange={this.handleInputChange} />
		    	
				  <input 
				  	id="state" 
				  	name="state"
				  	type="text" 
				  	placeholder="State (2 letters)" 
				  	value={this.state.state}
                    onChange={this.handleInputChange} />
		    	
				  <input 
				  	id="zip" 
				  	name="zip"
				  	type="text" 
				  	placeholder="Zip" 
				  	value={this.state.zip}
                    onChange={this.handleInputChange} />
		    	
				  <input 
				  	id="owner" 
				  	name="owner"
				  	type="text" 
				  	placeholder="Owner Name" 
				  	value={this.state.owner}
                    onChange={this.handleInputChange} />
		    	
				  <input 
				  	id="supervisor" 
				  	name="supervisor"
				  	type="text" 
				  	placeholder="Supervisor Last Name" 
				  	value={this.state.supervisor}
                    onChange={this.handleInputChange} />
		    	
				  <input 
				  	id="installer" 
				  	name="installer"
				  	type="text" 
				  	placeholder="Installer Last Name" 
				  	value={this.state.installer}
                    onChange={this.handleInputChange} />

				  <input id="submit" type="submit" value="Submit" />
    		</form>

    	</div>
    )
  }
}

export default JobForm; 