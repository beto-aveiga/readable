import React from "react";
// import {get_comments} from "../comments/actions"
import Comments from "../comments";
import Rate from "../rate/rate";
import { connect } from "react-redux";

class Post extends React.Component {

  componentDidMount() {
      // debugger;
    // this.props.dispatch(get_comments( this.props.id ));
  }

  render() {
    return (
        <div>POST {this.props.id}
            <Rate like={ () => {console.log('LIKE')} } dislike={ ()=> {console.log('DISLIKE')}} voteScore={ this.props.voteScore } />
            <Comments postId={this.props.id} comments={[]} />
        </div>
    );
  }
}


export default connect()(Post);
