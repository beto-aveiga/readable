import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import CommentsCount from "../../comments/comments_count";
import Rate from "../../rate/rate";
import Comments from "../../comments";

export default function() {
  return (
    <div key={this.props.id}>

        <div className="bg-near-white mw6 center ph4 pb4 mt4 shadow-2">

            <div className="tc">
                <i className="material-icons v-mid mv4 f1 bg-blue white br-100 pa3">mode_edit</i>
            </div>

            <div>
                <label className="f1 gray mt4 db">Author</label>
                <input type="text" className="ba b--gray pa2 w-100 db mt2" value={this.props.author} />
                <label className="f1 gray mt4 db">Title</label>
                <input type="text" className="ba b--gray pa2 w-100 db mt2" value={this.props.title} />
                <label className="f1 gray mt4 db">Body</label>
                <textarea className="ba b--gray pa2 w-100 db mt2" value={this.props.body} />
            </div>

            <div>
                <div className="ma3 flex content-center items-center justify-center mt4">
                    <div className="ba bg-green b--green white dim pointer ph2 pv3 bg-near-white w-25 tc mr1">SAVE</div>
                    <Link to={'/posts/'+this.props.category +'/'+this.props.id} className="ba red pointer ph2 pv3 dim  bg-white w-25 tc ml1 no-underline" onClick={this.props.toggleEditMode}>
                        CANCEL
                    </Link>
                </div>

            </div>



        </div>

    </div>
  );
}
