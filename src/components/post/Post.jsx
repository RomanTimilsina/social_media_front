import './post.scss'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Comments from '../comments/Comments';

const Post = ({post}) => {

  const [commentOpen, setCommentOpen] = useState(false)
  const liked = true;

  return (
    <div className='post'>
        <div className="user">
          <div className="userInfo">
              <img src={post.profilePic} alt="" />
              <div className="details">
                <Link className='link' to={`/profile/${post.userId}`}>
                  <p>{post.name}</p>
                  
                </Link>
                <p>1 min ago</p>
              </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p>{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div className="item">
            {liked ? <FavoriteOutlinedIcon/>:<FavoriteBorderOutlinedIcon/>}
            12 likes
          </div>
          <div className="item" onClick={() =>setCommentOpen(!commentOpen)}>
             <TextsmsOutlinedIcon  />
            12 comments
          </div>
          <div className="item">
              <ShareOutlinedIcon/>
            Share
          </div>
          
        </div>
        {commentOpen ? <Comments />:null}
    </div>
  )
}

export default Post
