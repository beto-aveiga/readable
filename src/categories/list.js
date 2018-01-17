import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Link, Route, withRouter } from "react-router-dom";

class Categories extends React.Component {

  render() {
    return (
        <div className="db tc ma2 mt4">
            {this.props.categories.map( (c,i) => <Link key={c.path} className={`f6 ph3 pv2 mb2 dib white bg-purple mh2 no-underline dim pointer animated flipInY anim-del-0${i}0 `} to={`/${c.name}`} >{ c.name }</Link>)}
        </div>
    );
  }
}


export default Categories;
