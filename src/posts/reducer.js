// importing action names
import { POST_CREATE, POST_EDIT, POST_DELETE, POSTS_INIT_ACTION, POST_UPVOTE_ACTION, POST_DOWNVOTE_ACTION } from "./actions";
// importing action creators
import { post_edit_action, post_delete_action, post_create_action } from "./actions";
import _ from "lodash";

function reducer(state = {}, action) {
  switch (action.type) {
    case POSTS_INIT_ACTION: {
      const { posts } = action;
      // setting props to lowercase
      const posts_propsTolower = posts.map( e => {
          e.commentcount = e.commentCount;
          e.votescore = e.voteScore;
          delete e.voteScore;
          delete e.commentCount;
          return e;
      });
      return _.assign({}, state, { 'posts':posts_propsTolower });
    }

    case POST_DOWNVOTE_ACTION:
    case POST_UPVOTE_ACTION: {
      const { post } = action;
      const { posts } = state;
      const index_post_to_update = _.findIndex(state.posts, state_post => post.id === state_post.id);
      posts[index_post_to_update] = post;
      return _.assign({}, state, { posts });
    }
    default:
      return state;
  }
}

export default reducer;
