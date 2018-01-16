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
          <Link to={`/posts/${this.props.category}/${this.props.id}/edit`} className="no-underline">
              <i className="material-icons v-mid mr1 f5 blue">mode_edit</i> <span className="ttu f6 black">Edit</span>
          </Link>
          <Link to={`/posts/${this.props.category}/${this.props.id}/delete`} className="no-underline">
              <i className="material-icons v-mid mr1 ml3 f5 red">delete</i> <span className="ttu f6 black">Delete</span>
          </Link>
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
