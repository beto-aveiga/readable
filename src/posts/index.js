import React from "react";
import { connect } from "react-redux";
import { get_all_posts } from "./actions";
import Post from "./post";
import _ from "lodash";

class Posts extends React.Component {
  state = {
    sort: "date_desc",
    category: ""
  };

  listenRouteChange(location, action) {
      const path_splitted = location.pathname.split("/");
      if (path_splitted.length === 2) {
        let category = path_splitted[1];
        console.log('CAMBIO DE RUTA ' + category);
        this.setState({ 'category': category });
      }
  }

  componentDidMount() {
    this.props.dispatch(get_all_posts());
    this.unlisten = this.props.history.listen((location, action) => { this.listenRouteChange(location, action); } );
    this.listenRouteChange( this.props.location );
  }

  componentWillUnmount() {
    this.unlisten();
  }

  updateSort = sort_method => {
    // making sure to only call sorting methods
    switch (sort_method) {
      case "date_asc":
      case "date_desc":
      case "rating_asc":
      case "rating_desc":
        this.setState({ sort: sort_method });
    }
  };

  // filter by category
  filter_by_category = (posts, category) => _.filter(posts, post => category === "" || post.category === category);

  // sorting methods
  rating_asc = posts => _.sortBy(posts, p => p.votescore);
  rating_desc = posts => _.sortBy(posts, p => -p.votescore);
  date_asc = posts => _.sortBy(posts, p => p.timestamp);
  date_desc = posts => _.sortBy(posts, p => -p.timestamp);

  render() {
    const sortIconClasses = " material-icons ml2 ba bg-gray white br-100 dim link pointer v-mid ";
    const activeSortClasses = " bg-orange";

    console.log('RENDERING '+this.state.category);

    return (
      <div>
          <div className="fr cb mr4 mb2 mt4">
              {/* sort by rating buttons */}
              <i className="material-icons v-mid mr1">sort</i>
              <span className="ttu f7">sort by rating</span>
              <i className={sortIconClasses + (this.state.sort == "rating_asc" ? activeSortClasses : "")} onClick={() => this.updateSort("rating_asc")}>
                  keyboard_arrow_up
              </i>
              <i className={sortIconClasses + (this.state.sort == "rating_desc" ? activeSortClasses : "")} onClick={() => this.updateSort("rating_desc")}>
                  keyboard_arrow_down
              </i>

              {/* sort by date buttons */}
              <i className="material-icons v-mid mr1 ml4">sort</i>
              <span className="ttu f7">sort by date</span>
              <i className={sortIconClasses + (this.state.sort == "date_asc" ? activeSortClasses : "")} onClick={() => this.updateSort("date_asc")}>
                  keyboard_arrow_up
              </i>
              <i className={sortIconClasses + (this.state.sort == "date_desc" ? activeSortClasses : "")} onClick={() => this.updateSort("date_desc")}>
                  keyboard_arrow_down
              </i>
          </div>
          {this[this.state.sort](this.filter_by_category(this.props.posts, this.state.category)).map((post, i, arr) => {
          return <Post key={post.id} {...post} />;
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  let posts = _.get(state, "postsReducer.posts", false);
  return { posts: posts ? posts : [] };
}

export default connect(mapStateToProps)(Posts);
