import React, { Component } from "react";
import { connect } from "react-redux";
import Posts from "../posts";
import Post from "../posts/post";
import Categories from "../categories/list";
import server from "../general/readableServer";

import { Link, Route, withRouter } from "react-router-dom";

class App extends Component {
  leavingComponents = 0;

  state = {
    categories: []
  };

  readCategories = () => {
    server.getCategories().then(data => {
      this.setState({ categories: data.categories });
    });
  };

  f = {
    "/categories": <Categories />,
    "/posts": <Posts />
  };

  componentDidMount() {
      this.readCategories();
  }

  render() {
    // const path = this.props.location.pathname.split('/');

    return (
      <div className="mw8 center sans-serif">
          <div className="f-headline tc ma4 mb0 roboto black-50 tracked-mega navy">
              <span className="dim dib animated fadeInLeft anim-del-010 anim-dur-020">read</span>
              <span className="dim dib animated fadeInRight anim-del-010 dark-red  anim-dur-020">able</span>
          </div>

          <Link to="/" className="db f5 tc animated fadeIn delay-sm no-underline blue">
              home
          </Link>

          <Categories categories={this.state.categories} />

          <Route
              exact
              path="/"
              render={() => (
                  <div className="tc cb overflow-hidden mv5">
                      <div className="f1 ph3  gray">
                          <i className="material-icons f1">home</i>
                      </div>
                      <div className="w50 bt b--silver tracked-mega ttu f6 pa3">all posts</div>
                  </div>
              )}
          />

          <Route exact path="/" component={Posts} />
          <Route exact path="/posts/:category/:id" component={Post} />
          <Route exact path="/posts/:category/:id/edit" render={ () =><Post categories={this.state.categories} />  } />

          <Route exact path="/:category" component={Posts} />

        <footer className=" bottom-0 left-0 pv4 ph3 ph5-m ph6-l mid-gray fl w-100 cf ">
          <small className="f6 db tc">
            REACT & REDUX TOY PROJECT <b className="ttu mh2">READABLE</b> UDACITY NANODEGREE
          </small>
          <div className="tc mt3">
            <a href="/privacy/" title="Privacy" className="f6 dib ph2 link mid-gray dim">
              luis.aveiga@gmail.com
            </a>
          </div>
        </footer>
      </div>
    );
  }
}

// function mapStateToProps(state) {}

export default withRouter(connect()(App));
