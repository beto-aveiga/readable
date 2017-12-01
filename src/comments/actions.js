import server from "../general/readableServer";

export const COMMENT_CREATE = 'COMMENT_CREATE'
export const COMMENT_EDIT = 'COMMENT_EDIT'
export const COMMENT_DELETE = 'COMMENT_DELETE'
export const COMMENTS_IN_POST_ACTION = 'COMMENTS_IN_POST_ACTION'

export const comment_create_action = comment => ({
    type: COMMENT_CREATE,
    comment
})

export const comment_delete_action = id => ({
    type: COMMENT_DELETE,
    id
})

export const comment_edit_action = comment => ({
    type: COMMENT_EDIT,
    comment
})


export const comments_in_post_action = comments => ({
  type: COMMENTS_IN_POST_ACTION,
  comments
});

export const get_comments = (postId) => dispatch => {
  server.getComments(postId).then(comments => dispatch(comments_in_post_action(comments)));
};
