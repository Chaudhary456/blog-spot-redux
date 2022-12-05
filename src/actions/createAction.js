import axios from "axios";

const postBlog = (msg) => {
    return {
        type: 'CREATE_BLOG',
        payload: msg
    }
}

export const createAction = (blog) => {
    return (dispatch)=>{
        dispatch(postBlog("PENDING"));
        axios.post(`${process.env.REACT_APP_API}/blogs`,{
            title: blog.title,
            body: blog.body,
            author: blog.author
        }).then(()=>{
            console.log("New Blog added");
            dispatch(postBlog("SUCCESS"));
        }).then(()=>{
            dispatch(postBlog('INITIAL'));
        })
        .catch(err => console.log(err))
    }
}

