import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import server from "../general/readableServer";

class Categories extends React.Component {
  state = {
    names: []
  };

  updateCategories = data => {
    this.setState({
      names: data.categories
    });
  };

  componentDidMount() {
    server.getCategories().then(this.updateCategories);
  }

  render() {
    return (
      <div className="db tc ma2 mt4">
          {this.state.names.map( (c,i) => <span key={c.path} className={`f6 ph3 pv2 mb2 dib white bg-red mh2 dim pointer animated flipInY anim-del-0${i}0 `}>{ c.name }</span>)}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//     let posts = _.get(state, 'postsReducer.posts', false);
//     return { posts: posts ? posts: [] }
// }

export default connect()(Categories);
