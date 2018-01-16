// importing action names
import { POST_CREATE, POST_EDIT, POST_DELETE, POSTS_INIT_ACTION, POST_UPVOTE_ACTION, POST_DOWNVOTE_ACTION, POST_INIT_ACTION } from "./actions";
// importing action creators
import { post_edit_action, post_delete_action, post_create_action, post_init_action } from "./actions";
import _ from "lodash";

// to make posts props to lowercase
function postPropsToLower(e) {
    e.commentcount = e.commentCount;
    e.votescore = e.voteScore;
    delete e.voteScore;
    delete e.commentCount;
    return e;
}

function reducer(state = {}, action) {
  switch (action.type) {

      case POST_DELETE: {
          debugger;
          let { post } = action;
          const state_without_post = _.filter(state.posts, state_post => post.id != state_post.id );
          debugger;
          return _.assign({}, state, { 'posts' : state_without_post });
      }


    case POSTS_INIT_ACTION: {
      let { posts } = action;
      posts = posts.map(postPropsToLower);
      return _.assign({}, state, { posts });
    }

    case POST_INIT_ACTION: {
        let { post } = action;
        let { posts } = state;
        if (typeof posts === 'undefined') {
            posts = [];
        }
        post = postPropsToLower(post);
        const index_post_to_update = _.findIndex(state.posts, state_post => post.id === state_post.id);
        if (index_post_to_update===-1) {
            posts.push(post);
        } else {
            posts[index_post_to_update] = post;
        }
        return _.assign({}, state, { posts });
    }

    case POST_DOWNVOTE_ACTION:
    case POST_UPVOTE_ACTION: {
      let { post } = action;
      const { posts } = state;
      const index_post_to_update = _.findIndex(state.posts, state_post => post.id === state_post.id);
      posts[index_post_to_update] = postPropsToLower(post);
      return _.assign({}, state, { posts });
    }
    default:
      return state;
  }
}

export default reducer;
