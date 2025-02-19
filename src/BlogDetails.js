// #-25 
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const {id} = useParams();
    return ( 
        <div className="blog-details">
            <h2>Blog details is here - {id}</h2>
        </div>
     );
}
 
export default BlogDetails;