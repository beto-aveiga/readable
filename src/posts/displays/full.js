import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import CommentsCount from "../../comments/comments_count";
import Rate from "../../rate/rate";
import Comments from "../../comments";

export default function() {
  return (
    <div key={this.props.id}>
        <div className="fl w-100 pa2">
            <div className="shadow-4  bg-white tl ">
                <div className="f3 lh-copy dark-blue bg-near-white ph4 pv2">
                    <div className="measure">
                        <Link to={`/posts/${this.props.category}/${this.props.id}`} className="no-underline blue">
                            {this.props.title}
                        </Link>
                    </div>
                </div>
                {/* Date and Author */}
                <div className="ph2 pv3 overflow-hidden">
                    {/* Author */}
                    <div className="fl">{this.displays.fields.author()}</div>
                    {/* Date */}
                    <div className="fl ml2">{this.displays.fields.date()}</div>
                </div>

                {/* body */}
                <div className="cb overflow-hidden pv5 ph4 bg-near-white relative">
                    <div className="fl tracked-mega gray">{this.props.body}</div>
                    {/* quote icon */}
                    <i className="material-icons f-6 absolute top-0 right-0 w30 white">format_quote</i>
                </div>

                {/* Footer */}
                <div className="mw9 center ph3-ns bt b--black-10 f6">
                    <div className="cf ph2-ns">
                        {/* Comments */}
                        <div className="fl w-100 w-third-ns pa2">
                            {/* <div className=" bg-white pv2">
                                <CommentsCount commentcount={this.props.commentcount} />
                            </div> */}
                        </div>
                        {/* Votescore */}
                        <div className="fl w-100 w-third-ns pa2 tc">
                            <div className=" bg-white pv2">
                                <Rate like={this.upVote} dislike={this.downVote} votescore={this.props.votescore} />
                            </div>
                        </div>
                        {/* Links: edit / delete */}
                        <div className="fl w-100 w-third-ns pa2 tr">{this.displays.fields.links()}</div>
                    </div>
                </div>
            </div>
        </div>
        {this.props.commentcount > 0 && <Comments postid={this.props.id} commentcount={this.props.commentcount} />}
    </div>
  );
}
