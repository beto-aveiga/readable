import React from "react";
import Comments from "../comments";
import CommentsCount from "../comments/comments_count";
import { post_upVote, post_downVote } from "./actions";
import Rate from "../rate/rate";
import { connect } from "react-redux";
import _ from "lodash";
import timeago from "timeago.js";
import Transition from "react-transition-group/Transition";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Link, Route, withRouter } from "react-router-dom";


class Post extends React.Component {
  state = {
    show: false
  };

  showFromProp() {
    setTimeout(() => {
      this.setState({ show: this.props.show });
    }, 1);
  }

  componentDidMount = this.showFromProp;
  componentWillReceiveProps = this.showFromProp;

  upVote = () => {
    this.props.dispatch(post_upVote(this.props.id));
  };

  downVote = () => {
    this.props.dispatch(post_downVote(this.props.id));
  };

  display = {
    full: () => (
      <div className="fl w-100 pa2 ">
          <div className="shadow-4  bg-white tl pa4">
              <div className="f3 lh-copy black-50 measure">{this.props.title}</div>
              <div className="code black-50">{this.timeago.format(this.props.timestamp)}</div>
              <div className="pa3 pl0 measure">{this.props.body}</div>
              <Rate like={this.upVote} dislike={this.downVote} votescore={this.props.voteScore} />
              <Comments postId={this.props.id} commentcount={this.props.commentcount} />
          </div>
      </div>
    ),
    teaser: () =>{

    return (
      <div className={this.props.className}>
          <div className="fl w-100 pa2">
              <div className="shadow-4  bg-white tl ">
                  <div className="f3 lh-copy dark-blue bg-near-white ph4 pv2">
                      <div className="measure">
                          <Link to={`/posts/${this.props.id}`} className="no-underline blue">{this.props.title}</Link>
                      </div>
                  </div>
                  <div className="ph4 pv2">
                      <div className="code black-50">{this.timeago.format(this.props.timestamp)}</div>
                      <div className="pa3 pl0  measure">{this.props.body}</div>
                  </div>


                  <div className="mw9 center ph3-ns">
                      <div className="cf ph2-ns">
                          <div className="fl w-100 w-third-ns pa2">
                              <div className=" bg-white pv2">
                                  <CommentsCount commentcount={this.props.commentcount} />
                              </div>
                          </div>
                          <div className="fl w-100 w-third-ns pa2">
                              <div className=" bg-white pv2">
                                  <Rate like={this.upVote} dislike={this.downVote} votescore={this.props.votescore} />
                              </div>
                          </div>

                          <div className="fl w-100 w-third-ns pa2">
                              <div className=" bg-white pv2">
                                  <Link to={`/posts/${this.props.id}/edit`} ><i className="material-icons">mode_edit</i>Edit</Link>
                                  <Link to={`/posts/${this.props.id}/delete`} ><i className="material-icons">delete</i>Delete</Link>
                              </div>
                          </div>


                      </div>
                  </div>


              </div>
          </div>
      </div>
    )}
  };

  render() {
    this.timeago = timeago();



    const classNames = {
      enter: `animated fadeIn ${this.props.animdelin}`,
      exit: `animated fadeOut ${this.props.animdelout}`
    };

    return this.display.teaser();
  }
}

function mapStoreToProps(store, own_props) {

  let posts = _.get(store, "postsReducer.posts", false);
  let post = posts ? posts.filter(post => post.id === own_props.id) : [];
  return post[0];
}


export default withRouter(connect(mapStoreToProps)(Post));

// export default connect(mapStoreToProps)(Post);
