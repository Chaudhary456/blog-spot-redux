import axios from "axios";

const editBlog = (msg) => {
    return {
        type: 'UPDATE_BLOG',
        payload: msg
    }
}

export const updateBlog = ({updatedBlog, id}) => {
    return (dispatch)=>{
        dispatch(editBlog("PENDING"));
        axios.patch(`${process.env.REACT_APP_API}/blogs/`+id,{
            title: updatedBlog.title,
            body: updatedBlog.body,
            author: updatedBlog.author
        }).then(()=>{
            console.log("Blog Updateded");
            dispatch(editBlog("SUCCESS"));
        }).then(()=>{
            dispatch(editBlog('INITIAL'));
        })
        .catch(err => console.log(err))
    }
}

