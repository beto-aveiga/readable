import React, { Component } from "react";
import { connect } from "react-redux";
import server from "./readableServer";
import Posts from "../posts";
import Categories from "../categories/list";
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Link, Route, withRouter } from "react-router-dom";


class App extends Component {

    leavingComponents = 0;

    f = {
        '/categories': <Categories />,
        '/posts': <Posts />
    }

    canEnter = () => this.leavingComponents === 0;

    leaving = () =>
        this.leavingComponents++;

    leavingDone = () =>
        this.leavingComponents--;

  render() {
    // server.getCategories().then(data => console.log(data));
    // server.getCategories().then(data => console.log(data));
    // server.getPosts().then(data => console.log(data));
    // server.getPost("8xf0y6ziyjabvozdd253nd").then(data => console.log(data));
    //


    return (
      <div className="mw8 center sans-serif">
          <div className="f-headline tc ma4 mb0 roboto black-50 tracked-mega navy">
              <span className="dim dib animated fadeInLeft anim-del-010 anim-dur-020">read</span>
              <span className="dim dib animated fadeInRight anim-del-010 dark-blue  anim-dur-020">able</span>
          </div>

          {/* <Route path="/categories" exact={true} render={() => <Categories />} />
              <Route path="/posts" exact={true} component={Posts} />
          */}

          <div className="f5 tc animated fadeIn delay-sm">HOME</div>


          <Link className="close-search" to="/categories">
              Cats
          </Link>

          <Link className="close-search" to="/posts">
              Posts
          </Link>

          <Categories />
          <Posts show={this.props.location.pathname=='/posts'}  />

          <footer className="fixed bottom-0 left-0 pv4 ph3 ph5-m ph6-l mid-gray fl w-100 cf ">
              <small className="f6 db tc">REACT & REDUX TOY PROJECT <b className="ttu mh2">READABLE</b> UDACITY NANODEGREE</small>
              <div className="tc mt3">
                  <a href="/privacy/"  title="Privacy" className="f6 dib ph2 link mid-gray dim">luis.aveiga@gmail.com</a>
              </div>
          </footer>


      </div>
    );
  }
}

// function mapStateToProps(state) {}

export default withRouter(connect()(App));
