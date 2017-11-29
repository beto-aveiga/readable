import server from "../general/readableServer";
export const POST_CREATE = "POST_CREATE";
export const POST_EDIT = "POST_EDIT";
export const POST_DELETE = "POST_DELETE";
export const POSTS_INIT_ACTION = "POSTS_INIT_ACTION";

export const post_create_action = post => ({
  type: POST_CREATE,
  post
});

export const post_delete_action = id => ({
  type: POST_DELETE,
  id
});

export const post_edit_action = post => ({
  type: POST_EDIT,
  post
});

export const posts_init_action = posts => ({
  type: POSTS_INIT_ACTION,
  posts
});

export const get_all_posts = () => dispatch => {
  server.getPosts().then(posts => dispatch(posts_init_action(posts)));
};

// function get_all_posts() {
//   return dispatch => { server.getPosts.then( posts => dispatch(posts_init_action(posts)) );
//   };
// }
