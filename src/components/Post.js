import React, { Component } from 'react';
import PostDetail from './PostDetail';

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = { 
        showDetails: true
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick () {
    let newState = !this.state.showDetails;
    this.setState({
      showDetails: newState
    }); 
  }



  render() {

    let detail = null;
    if (this.state.showDetails) {
      detail = <PostDetail post={this.props.post} />
    } else {
      detail = null;
    }

    return (
    	<td>
        <div className="post" onClick={this.handleClick}>
          <div className="image"><img src={this.props.post.imageDataUrl}/></div>
          {detail}
        </div>
    	</td>
    )
  }
}

export default Post; 