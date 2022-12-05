import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createAction } from "../actions/createAction";


const Create = () => {

    const createReducer = useSelector(state => state.createReducer);
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("");
    const history=useHistory();

    console.log(createReducer.status)

    if(createReducer.status === "SUCCESS"){
        history.push("/");
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        
        dispatch(createAction(blog));

    }

    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     setIsPending(true);
    //     const blog={title,body,author};

    //     fetch("http://localhost:8000/blogs",{
    //         method:"POST",
    //         headers:{"content-type":"application/json"},
    //         body: JSON.stringify(blog)
    
    //     }).then(()=>{
    //         console.log("New Blog added");
    //         setIsPending(false);
    //         history.push("/");
    //     })
    // }


    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text"
                required 
                value={title} 
                onChange={(event)=> setTitle(event.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                required 
                value={body}
                onChange={(event)=>setBody(event.target.value)}
                ></textarea>
                <label>Author</label>
                <input 
                type="text"
                required 
                value={author} 
                onChange={(event)=> setAuthor(event.target.value)}
                />
                { createReducer.status === "INITIAL" ? <button className="btn">Add Blog</button>:<button className="btn">Adding...</button>}
            </form>
        </div>
     );
}
 
export default Create;