import axios from "axios";

const getOneBlog = (blog) => {
    return {
        type: 'GET_ONE_BLOG',
        payload: blog
    }
}

export const fetchOneBlog = (id) => {
    return (dispatch)=>{
        dispatch(getOneBlog({data:{},status: "PENDING"}));
        axios.get(`${process.env.REACT_APP_API}/blogs/`+id).then((res)=>{
            console.log("Blog Fetched");
            dispatch(getOneBlog({data:res.data, status: "SUCCESS"}));
        }).catch(err => console.log(err))
    }
}