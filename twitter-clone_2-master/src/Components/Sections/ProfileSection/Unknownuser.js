import React,{useState} from "react";
import style from "./ProfileSection.module.css";
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import WestIcon from "@mui/icons-material/West";
import CustomButton from "../../../Atom/Button/CustomButton";
import { useNavigate } from "react-router-dom";
import {userProfile} from "../../../Recoil/Atom1/Atom";

import { useRecoilValue } from "recoil";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PollIcon from "@mui/icons-material/Poll";
import UploadIcon from "@mui/icons-material/Upload";
import VerifiedIcon from '@mui/icons-material/Verified';
import { Avatar } from "@mui/material";

function ProfileSection() {
   const nevigate = useNavigate();
   const unknownProfileData=useRecoilValue(userProfile)
  console.log(unknownProfileData.name)
  const [likesCount, setLikesCount] = useState(0);
 
  function tweetsUnknown(){
    
  }
  function handleLike() {
    setLikesCount(likesCount ? likesCount-1 : likesCount+1 );
    
  }
  function xyz (dataName)  {
    console.log(dataName);
    // setNewProfile(dataName)
    nevigate("/Profile")
    };
 
  return (
    <div className={style.wrapper}>
      <div className={style.feed__header}>
        <p onClick={()=> nevigate("/home") }><WestIcon /></p>
        <h2>{unknownProfileData.name}</h2>
      </div>
        <img className={style.container} src={unknownProfileData.tweetPic} />
      <div>
        <span className={style.Avatarsection}>
          <img
            className={style.img}
            src = {unknownProfileData.tweetPic}/>
        
         
          <CustomButton customCss={style.btn} buttonText={"Edit profile"} />
        </span>
      </div>

     <div className={style.textcontaint}>
        <h4>{unknownProfileData.name}</h4>
        <p>{unknownProfileData.handlerName}</p>
        <p>{unknownProfileData. organization}</p>
        <p>{unknownProfileData.joinedDate}</p>
  </div>
  <div className={style.replies}>
      <h4 onClick={tweetsUnknown}>Tweet</h4>
      <h4>Tweet & replies</h4>
      <h4>Media</h4>
      <h4>Likes</h4>
    </div>
   
          <div className={style.wrapper}>
            <div className={style.container1}>
              
              
                <Avatar   className={style.avatar} src={unknownProfileData.tweetPic} />
               
             

              <div className={style.innercontainer}>
                <span className={style.text}>
                  <h3>{unknownProfileData.name}<VerifiedIcon style={{color:"blue"}}/></h3>
                  
                </span>
                <p>{unknownProfileData.handlerName}</p>
                <h4>{unknownProfileData.tweetText}</h4>
              </div>
            </div>

            <div className={style.img1}>
              <img
                style={{ width: "30rem", height: "30rem",borderRadius:"15px" }}
                alt="Picture"
                src={unknownProfileData.tweetPic}
              />
            </div>
            <div className={style.icons}>
                  <span>
                    {unknownProfileData.tweetCount}
                    <ChatBubbleOutlineIcon />
                  </span>
                  <span>
                    {unknownProfileData.retweetCount}
                    <SyncIcon />
                  </span>
                  <span>
                    {unknownProfileData.likesCount}{likesCount}
                    <FavoriteBorderIcon  onClick={handleLike}
                      // {
                      //   ...likesCount ? (setLikesCount(likesCount+1)) : (setLikesCount(likesCount-1))
                      // }
                    />
                  </span>
                  <span>
                    {unknownProfileData.viewsCount}
                    <PollIcon />
                  </span>

                  <UploadIcon />
                </div>
          </div>
     
    {/* <h4>{unknownProfileData.tweets[0].tweetText}</h4> */}
    </div>
  );
}

export default ProfileSection;