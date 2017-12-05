import { connect } from "react-redux";
import React from "react";
import Rate from "../rate/rate"
import { COMMENT_UPVOTE_ACTION, COMMENT_DOWNVOTE_ACTION } from "./actions"
import { comment_upVote, comment_downVote } from "./actions"
import _ from "lodash";


class Comment extends React.Component {

  componentDidMount() {
      // debugger;
    // this.props.dispatch(get_comments( this.props.id ));
  }

  upVote = () => {
    this.props.dispatch(comment_upVote(this.props.id));
  };

  downVote = () => {
    this.props.dispatch(comment_downVote(this.props.id));
  };


  render() {
    return (

        <div className="pa0 tl">
            <blockquote className="athelas ml0 mt0 pa2 mv3 black-90  b--black-40 ma0">
                <p className="f5 lh-copy mt0 ">
                    { this.props.body }
                    <cite className="ml2" >―{this.props.author}</cite>
                </p>

                <div>
                    <Rate className="fl " like={this.upVote} dislike={this.downVote} votescore={this.props.voteScore} />
                </div>
            </blockquote>
        </div>


    );
  }
}

function mapStoreToProps(store, own_props) {
  let comments = _.get(store, "commentsReducer.comments", false);
  let comment = comments ? comments.filter(comment => comment.id === own_props.id) : [];
  console.log('comentario',comment);

  return comment[0];
}


export default connect(mapStoreToProps)(Comment);
