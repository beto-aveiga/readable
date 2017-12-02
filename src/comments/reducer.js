import { COMMENTS_IN_POST_ACTION, COMMENT_UPVOTE_ACTION, COMMENT_DOWNVOTE_ACTION } from "./actions";
import _ from "lodash";

function reducer(state = { comments: [] }, action) {
  switch (action.type) {
    case COMMENTS_IN_POST_ACTION: {
      const { comments } = action;
      let uniqueComments = _.unionBy(comments, state.comments, "id");
      return _.assign({}, state, { comments: uniqueComments });
    }

    case COMMENT_DOWNVOTE_ACTION:
    case COMMENT_UPVOTE_ACTION: {
      const { comment } = action;
      const { comments } = state;
      const index_comment_to_update = _.findIndex(state.comments, state_comment => comment.id === state_comment.id);
      comments[index_comment_to_update] = comment;
      return _.assign({}, state, { comments });
    }



    default:
      return state;
  }
}

export default reducer;
