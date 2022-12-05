import axios from "axios";

const getBlogs = (blogs) => {
    return {
        type: 'GET_BLOG',
        payload: blogs
    }
}

export const fetchBlogs = () => {
    return (dispatch)=>{
        dispatch(getBlogs({data:[],status:"PENDING"}));
        axios.get(`${process.env.REACT_APP_API}/blogs`).then((res)=>{
            console.log("Blogs Fetched");
            dispatch(getBlogs({data:res.data, status: "SUCCESS"}));

        }).catch(err => console.log(err))
    }
}