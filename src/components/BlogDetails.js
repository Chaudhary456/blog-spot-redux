import { useHistory, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteBlog} from "../actions/deleteAction";
import {updateBlog} from "../actions/updateAction";
import {fetchOneBlog} from "../actions/fetchOneAction";

const BlogDetails = () => {
    const { id } = useParams();
    const [choose, setChoose] = useState(false);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const history = useHistory();
    
    const dispatch = useDispatch();
    const deleteReducer = useSelector((state => state.deleteReducer));
    const updateReducer = useSelector((state => state.updateReducer));
    const fetchOneReducer = useSelector((state => state.fetchOneReducer));
    
    useEffect(() => {
        dispatch(fetchOneBlog(id)); 
    }, [])
    

    if(deleteReducer.status === "SUCCESS"){
        history.push("/");
    }

    if(updateReducer.status === "SUCCESS"){
        history.push("/");
    }

    const handleDelete = () => {
        dispatch(deleteBlog(id))
    }

    const handleEdit = () => {
        setChoose(true);
        setTitle(fetchOneReducer.blog.title);
        setBody(fetchOneReducer.blog.body);
        setAuthor(fetchOneReducer.blog.author);
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const updatedBlog = { title, body, author };
        console.log(updatedBlog);
        dispatch(updateBlog({updatedBlog,id}));
    }

    return (
        <div className="blog-details">
            {fetchOneReducer.status === "PENDING"? <div>Loading...</div>:
            choose === false ? (
                <article>
                    <h2>{fetchOneReducer.blog.title}</h2>
                    <div>{fetchOneReducer.blog.body}</div>
                    <hr />
                    <p>Written By: {fetchOneReducer.blog.author}</p>
                    <button className="btn" onClick={handleDelete}>Delete Blog</button>
                    <button className="btn" onClick={handleEdit}>Edit Blog</button>
                </article>
            ): (
                <div className="create">
                    <form onSubmit={handleUpdate}>
                        <label>Blog title:</label>
                        
                        <input
                            type="text"
                            required
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        <label>Blog Body:</label>
                        <textarea
                            required
                            value={body}
                            onChange={(event) => setBody(event.target.value)}
                        ></textarea>
                        <label>Author</label>
                        <input
                            type="text"
                            required
                            value={author}
                            onChange={(event) => setAuthor(event.target.value)}
                        />
                        { updateReducer.status === "PENDING" ? 
                            <button disabled className="btn">Updating...</button> : 
                            <button className="btn">Update Blog</button> 
                        }
                    </form>
                </div>
            )}


        </div>
    );
}

export default BlogDetails;