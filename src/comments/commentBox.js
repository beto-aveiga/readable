import React from "react";
import Comments from "../comments";
import CommentsCount from "../comments/comments_count";
import { post_upVote, post_downVote } from "./actions";
import Rate from "../rate/rate";
import { connect } from "react-redux";
import _ from "lodash";
import timeago from "timeago.js";
import { Link, Route, withRouter } from "react-router-dom";
import { get_post } from "./actions";

class CommentBox extends React.Component {
  state = {};

  timeago = timeago();

  componentDidMount() {}

  render = () => (
    <form className="pa4 black-80 bg-near-white">
        <div className="measure-wide center ">
            <div className="relative cb mt3">
                <label for="password" className="f6 b db mb2 ttu db  top-1 left-1">
                    author
                </label>
                <input className="input-reset ba b--black-20 pa3 db w-100" type="text" value={this.props.comment.author} />
            </div>

            <div className="relative cb mt3">
                <label for="password" className="f6 b db mb2 ttu  top-1 left-1">
                    comment
                </label>
                <textarea className="input-reset ba b--black-20 pa3 mb2 db w-100" value={this.props.comment.body} />
            </div>
        </div>

        <div className="ma3 flex content-center items-center justify-center mt4">
            <div className="ba bg-green b--green white dim pointer ph2 pv3 bg-near-white w-25 tc mr1">SAVE</div>
            <div className="ba red pointer ph2 pv3 dim  bg-white w-25 tc ml1" onClick={this.props.toggleEditMode}>
                CANCEL
            </div>
        </div>
    </form>
  );
}

function mapStoreToProps(store, own_props) {
  debugger;

  return [];
}

export default withRouter(connect(mapStoreToProps)(CommentBox));
