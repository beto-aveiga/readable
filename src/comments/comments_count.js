import { connect } from "react-redux";
import React from "react";
import _ from "lodash";


class Comments_Count extends React.Component {

  componentDidMount() {
      // debugger;
    // this.props.dispatch(get_comments( this.props.id ));
  }

  render() {

      switch (this.props.commentscount) {

          case 0:
            return (
                <div className="">
                    No comments
                </div>
            );
        case 1:
            return (
                <div className="">
                    1 comment
                </div>
            );
        default:
            return (
                <div className="">
                    {this.props.commentscount} comments
                </div>
            )
      }

  }
}



export default connect()(Comments_Count);
