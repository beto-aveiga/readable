export const POST_CREATE = 'POST_CREATE'
export const POST_EDIT = 'POST_EDIT'
export const POST_DELETE = 'POST_DELETE'

export const post_create_action = post => ({
    type: POST_CREATE,
    post
})

export const post_delete_action = id => ({
    type: POST_DELETE,
    id
})

export const post_edit_action = post => ({
    type: POST_EDIT,
    post
})
