export const COMMENT_CREATE = 'COMMENT_CREATE'
export const COMMENT_EDIT = 'COMMENT_EDIT'
export const COMMENT_DELETE = 'COMMENT_DELETE'

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
