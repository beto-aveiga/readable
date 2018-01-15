import { connect } from "react-redux";
import React from "react";
import Rate from "../rate/rate"
import { COMMENT_UPVOTE_ACTION, COMMENT_DOWNVOTE_ACTION } from "./actions"
import { comment_upVote, comment_downVote } from "./actions"
import _ from "lodash";
import { Link, Route, withRouter } from "react-router-dom";


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

        <div className="pa0 tl shadow-4 mb4">
            <blockquote className="athelas ml0 mt0 pa mv3 black-90  b--black-40 ma0">
                <p className="f5 lh-copy mt0 ">
                    <div className="bg-near-white pv4 ph4 gray tracked-mega sans-serif relative" >
                        { this.props.body } <cite className="ml2" >―{this.props.author}</cite>
                        <i className="material-icons f1 absolute right-1 top-1 white">mode_comment</i>
                    </div>

                </p>

                <div className="overflow-hidden sans-serif f6 ph4">


                    <div className=" bg-white pv2 fr w-third tr">
                        <Link to={`/comments/${this.props.id}/edit`} className="no-underline">
                            <i className="material-icons v-mid mr1 f5 blue">mode_edit</i> <span className="ttu f6 black">Edit</span>
                        </Link>
                        <Link to={`/comments/${this.props.id}/delete`} className="no-underline">
                            <i className="material-icons v-mid mr1 ml3 f5 red">delete</i> <span className="ttu f6 black">Delete</span>
                        </Link>
                    </div>

                    <div className="fr w-third pa tc">
                        <div className=" bg-white pv2">
                            <Rate like={this.upVote} dislike={this.downVote} votescore={this.props.voteScore} />
                        </div>
                    </div>


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
