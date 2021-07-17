import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Blog from "./Blog/Blog";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <Link to="/addBlog">
        <Button
          variant="contained"
          color="primary"
          startIcon={<i className="fas fa-plus"></i>}
        >
          Add Blog
        </Button>
      </Link>
      <div className="blogs__blogsList">
        <Blog
          title="My first Blog"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laboriosam explicabo officia consectetur? Nam dolores aspernatur ut laudantium eum in quisquam autem nostrum, numquam ipsam at recusandae quos nihil deleniti?"
          thumbnailUrl="https://images.pexels.com/photos/804463/pexels-photo-804463.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          username="Godswill"
        />
      </div>
    </div>
  );
};

export default Blogs;
