import { COMMENTS_IN_POST_ACTION } from "./actions";
import _ from "lodash";

function reducer(state = { comments: [] }, action) {
  const { comments } = action;

  switch (action.type) {
    case COMMENTS_IN_POST_ACTION:
      return Object.assign({}, state, {
        comments:_.unionBy( comments, state.comments, 'id' )
      });
    default:
      return state;
  }
}

export default reducer;
