import BlogList from './BlogList'
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../actions/fetchAction";
import {useEffect} from "react";
const Home = () => {
    const fetchReducer = useSelector(state => state.fetchReducer);
    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(fetchBlogs());
    }, [])
    
    return ( 
        <div className="home">
          { fetchReducer.status === "PENDING"? 
            <h1>Loading....</h1>:
            <BlogList blogs={fetchReducer.blogs} title='All Blogs!'/>
          }
        </div>
     );
}
 
export default Home;