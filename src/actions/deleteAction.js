import axios from "axios";
import { useHistory} from "react-router-dom";

const removeBlog = (msg) => {
    return {
        type: 'DELETE_BLOG',
        payload: msg
    }
}

export const deleteBlog = (id) => {
    
    return (dispatch) => {
        dispatch(removeBlog("PENDING"));
        axios.delete(`${process.env.REACT_APP_API}/blogs/` + id).then((res) => {
            console.log("Blog Deleted");
            dispatch(removeBlog("SUCCESS"));
        }).then(()=>{
            dispatch(removeBlog('INITIAL'));
        }).catch(err => console.log(err));
    };
}