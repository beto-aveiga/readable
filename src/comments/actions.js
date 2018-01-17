import server from "../general/readableServer";

export const COMMENT_CREATE = "COMMENT_CREATE";
export const COMMENT_EDIT = "COMMENT_EDIT";
export const COMMENT_DELETE = "COMMENT_DELETE";
export const COMMENTS_IN_POST_ACTION = "COMMENTS_IN_POST_ACTION";
export const COMMENT_DOWNVOTE_ACTION = "COMMENT_DOWNVOTE_ACTION";
export const COMMENT_UPVOTE_ACTION = "COMMENT_UPVOTE_ACTION";

export const comment_create_action = comment => ({
  type: COMMENT_CREATE,
  comment
});

export const comment_delete_action = comment => ({
  type: COMMENT_DELETE,
  comment
});

export const comment_edit_action = comment => ({
  type: COMMENT_EDIT,
  comment
});

export const comments_in_post_action = comments => ({
  type: COMMENTS_IN_POST_ACTION,
  comments
});

export const comment_upVote_action = comment => ({
  type: COMMENT_UPVOTE_ACTION,
  comment
});

export const comment_downVote_action = comment => ({
  type: COMMENT_DOWNVOTE_ACTION,
  comment
});

export const comment_upVote = id => dispatch => {
  server.upVoteComment(id).then(data => dispatch(comment_upVote_action(data)));
};

export const comment_downVote = id => dispatch => {
  server.downVoteComment(id).then(data => dispatch(comment_downVote_action(data)));
};

export const comment_delete = id => dispatch => {
  server.delComment(id).then(data => dispatch(comment_delete_action(data)));
};

export const get_comments = id => dispatch => {
  server.getComments(id).then(comments => dispatch(comments_in_post_action(comments)));
};
