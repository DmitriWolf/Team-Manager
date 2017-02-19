import React, { Component } from 'react';
import Counter from '../data/Counter';
import PostDetail from './PostDetail';

class Post extends Component {

  constructor(props) {
    super(props);
    this.state = { 
        clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }


   handleClick () {
    let newState = !this.state.clicked;
    this.setState({
      clicked: newState
    }); 
  }



  render() {

    let detail = null;
    if (this.state.clicked) {
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