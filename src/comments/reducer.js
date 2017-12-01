import { COMMENTS_IN_POST_ACTION } from "./actions";
import _ from "lodash";

function reducer(state = { comments: [] }, action) {
  switch (action.type) {
    case COMMENTS_IN_POST_ACTION: {
      const { comments } = action;
      let uniqueComments = _.unionBy(comments, state.comments, "id");
      return _.assign({}, state, { comments: uniqueComments });
    }
    default:
      return state;
  }
}

export default reducer;
