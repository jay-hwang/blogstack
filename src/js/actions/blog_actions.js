export const SAVE_BLOGS = 'SAVE_BLOGS';
export const saveBlogs = blogs => ({
    type: SAVE_BLOGS,
    blogs
});

export const REQUEST_BLOGS = 'REQUEST_BLOGS';
export const requestBlogs = tags => ({
    type: REQUEST_BLOGS,
    tags
});

export const REQUEST_USER_BLOGS = 'REQUEST_USER_BLOGS';
export const requestUserBlogs = user => ({
    type: REQUEST_USER_BLOGS,
    user
});

export const DELETE_BLOG = 'DELETE_BLOG';
export const deleteBlog = id => ({
    type: DELETE_BLOG,
    id
});

export const REMOVE_BLOG = 'REMOVE_BLOG';
export const removeBlog = id => ({
    type: REMOVE_BLOG,
    id
});

export const RECEIVE_BLOGS = 'RECEIVE_BLOGS';
export const receiveBlogs = (blogs, blogIndex) => ({
    type: RECEIVE_BLOGS,
    blogs,
    blogIndex
});

export const RECEIVE_USER_BLOGS = 'RECEIVE_USER_BLOGS';
export const receiveUserBlogs = userBlogs => ({
    type: RECEIVE_USER_BLOGS,
    userBlogs
});

export const RECEIVE_BLOG_ERRORS = 'RECEIVE_BLOG_ERRORS';
export const receiveBlogErrors = (errors) => ({
    type: RECEIVE_BLOG_ERRORS,
    errors
});
