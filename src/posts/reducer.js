import _ from "lodash";

// importing action names
import { POST_CREATE, POST_EDIT, POST_DELETE, POSTS_INIT_ACTION, POST_UPVOTE_ACTION, POST_DOWNVOTE_ACTION } from "./actions";
// importing action creators
import { post_edit_action, post_delete_action, post_create_action } from "./actions";

function reducer(state = {}, action) {
  switch (action.type) {
    case POSTS_INIT_ACTION: {
      const { posts } = action;
      return _.assign({}, state, { posts });
    }
    case POST_UPVOTE_ACTION: {
      const { post } = action;
      const { posts } = state.posts;
      const index_post_to_update = _.findIndex(state.posts, state_post => post.id === state_post.id);
      posts[index_post_to_update] = post;
      return _.assign({}, state, { posts });
    }
    default:
      return state;
  }
}

export default reducer;
