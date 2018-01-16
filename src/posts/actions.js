import server from "../general/readableServer";
export const POST_CREATE = "POST_CREATE";
export const POST_EDIT = "POST_EDIT";
export const POST_DELETE = "POST_DELETE";
export const POSTS_INIT_ACTION = "POSTS_INIT_ACTION";
export const POST_UPVOTE_ACTION = "POST_UPVOTE_ACTION";
export const POST_DOWNVOTE_ACTION = "POST_DOWNVOTE_ACTION";
export const POST_INIT_ACTION = "POST_INIT_ACTION";

export const post_create_action = post => ({
  type: POST_CREATE,
  post
});

export const post_delete_action = post => ({
  type: POST_DELETE,
  post
});

export const post_edit_action = post => ({
  type: POST_EDIT,
  post
});

export const posts_init_action = posts => ({
  type: POSTS_INIT_ACTION,
  posts
});

export const post_upVote_action = post => ({
  type: POST_UPVOTE_ACTION,
  post
});

export const post_downVote_action = post => ({
  type: POST_DOWNVOTE_ACTION,
  post
});

export const post_init_action = post => ({
  type: POST_INIT_ACTION,
  post
});

export const post_upVote = id => dispatch => {
  server.upVotePost(id).then(data => dispatch(post_upVote_action(data)));
};

export const post_downVote = id => dispatch => {
  server.downVotePost(id).then(data => dispatch(post_downVote_action(data)));
};

export const get_all_posts = () => dispatch => {
  server.getPosts().then(posts => dispatch(posts_init_action(posts)));
};

export const get_post = id => dispatch => {
  server.getPost(id).then(post => dispatch(post_init_action(post)));
};

export const delete_post = id => dispatch => {
  server.delPost(id).then(post => dispatch(post_delete_action(post)));
};
