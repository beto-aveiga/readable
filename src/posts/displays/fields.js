import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import CommentsCount from "../../comments/comments_count";
import Rate from "../../rate/rate";
import Comments from "../../comments";

export default function() {
  return {
    comments: () => (
      <div className="fl w-100 w-third-ns pa2">
          <div className=" bg-white pv2">
              <CommentsCount commentcount={this.props.commentcount} />
          </div>
      </div>
    ),
    links: () => (
      <div className=" bg-white pv2">
          <Link to={`/posts/${this.props.category}/${this.props.id}/edit`} className="no-underline pointer">
              <i className="material-icons v-mid mr1 f5 blue">mode_edit</i> <span className="ttu f6 black">Edit</span>
          </Link>
          <span to={`/posts/${this.props.category}/${this.props.id}/delete`} onClick={ this.deleteConfirmationToggle } className="no-underline pointer">
              <i className="material-icons v-mid mr1 ml3 f5 red">delete</i> <span className="ttu f6 black">Delete</span>
          </span>
          { this.state.deleteConfirmation && (
              <div className="flex justify-end mt4">
                  <div className="f6 ph3 pv2 " >Are you sure?</div>
                  <div className="f6 link dim br1 ph3 pv2 mb2 mr2 dib white bg-red pointer" onClick={ this.userConfirmDeletionOfPost }>YES</div>
                  <div className="f6 link dim br1 ba ph3 pv2 mb2 dib dark-gray pointer" onClick={ this.deleteConfirmationToggle }>NO</div>
              </div>
          )}
      </div>
    ),

    date: () => (
      <div className="black-50">
          <i className="material-icons v-mid mr1 ml3">today</i>
          <span className="f6">{this.timeago.format(this.props.timestamp)}</span>
      </div>
    ),
    author: () => (
      <div>
          <i className="material-icons v-mid mr1 ml3 gray vmid">person</i>
          <span className="f6">by</span> <span className="gray f6 b">{this.props.author}</span>
      </div>
    )
  };
}
