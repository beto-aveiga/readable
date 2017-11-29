// importing action names
import { POST_CREATE, POST_EDIT, POST_DELETE, POSTS_INIT_ACTION } from "./actions";
// importing action creators
import { post_edit_action, post_delete_action, post_create_action } from "./actions";

function reducer(state = {}, action) {
  const { posts } = action;
  switch (action.type) {
    case POSTS_INIT_ACTION:
      return Object.assign({}, state, {
        posts: posts
      });
      default:
      return state;
  }
}

export default reducer;
