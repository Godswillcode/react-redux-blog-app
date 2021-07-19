import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/userSlice";
import "./AddBlog.css";
import { useHistory } from "react-router";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const user = useSelector(selectUser);
  const history = useHistory();

  const addBlog = (e) => {
    e.preventDefault();

    db.collection("blogs").add({
      title: title,
      content: content,
      thumbnailUrl: thumbnailUrl,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    history.push("/");
  };


  return (
    <div className='addBlog'>
              <form>
                 <div className='addBlog__details'>
                 <h3>Blog Title</h3>
                 
                 </div>
              </form>
    </div>
  )
};

export default AddBlog;
