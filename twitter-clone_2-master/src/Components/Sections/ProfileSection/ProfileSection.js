import React, { useState } from "react";
import style from "./ProfileSection.module.css";
import WestIcon from "@mui/icons-material/West";
import CustomButton from "../../../Atom/Button/CustomButton";
import { useNavigate } from "react-router-dom";
import RightContainer2 from "../../rightContainer/RightContainer2/RightContainer2"
import { GoLocation } from "react-icons/go";
import { FaBirthdayCake } from "react-icons/fa";
import { myTweets } from "../../../Recoil/Atom1/Atom";
import { useRecoilState, useRecoilValue } from "recoil";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PollIcon from "@mui/icons-material/Poll";
import UploadIcon from "@mui/icons-material/Upload";
import VerifiedIcon from '@mui/icons-material/Verified';
import { Avatar } from "@mui/material";
// import { tweetPosts } from "../../ConstData/ConstData";
//import { isTweetPost ,userProfile} from "../../Recoil/Atom1/Atom";




function ProfileSection() {
   
   const PersonalTweets=useRecoilValue(myTweets)
    console.log(PersonalTweets,"Profile Section")
  let Data = JSON.parse(localStorage.getItem("user0"));
  // const[post,setPost]=useState(tweetPosts)
  const nevigate = useNavigate();
  const [likesCount, setLikesCount] = useState(0);
  //const[lpost,setLpost]=useState(tweetPosts.length)
  // const[newPost,setNewPost] = useRecoilState(isTweetPost);
  // const[newProfile,setNewProfile] = useRecoilState(userProfiles);
  function  fetchData()
  {
    // setPost(tweetPosts)
  }
 
 
  function handleLike() {
    setLikesCount(likesCount ? likesCount-1 : likesCount+1 );
    
  }
 
  function handleUserProfile() {
    //setNewProfile()
    alert("kkkk")
  }
  
 function xyz (dataName)  {
    console.log(dataName);
    // setNewProfile(dataName)
    nevigate("/Profile2")
    };
 
  return (
    <>
    <div className={style.wrapper}>
      <div className={style.feed__header}>
        <p onClick={()=> nevigate("/home") }><WestIcon /></p>
        <h2>{Data.Name}</h2>
      </div>
        <img className={style.container} src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" />
      <div>
        <span className={style.Avatarsection}>
          <img
            className={style.img}
            src="https://cdn.pixabay.com/photo/2018/11/13/22/01/avatar-3814081__480.png"/>
          <CustomButton customCss={style.btn} buttonText={"Edit profile"} />
        </span>
      </div>

      <div className={style.textcontaint}>
        <h4>{`${"Name:-"}${Data.Name}`}</h4>
        <h5>{`${"@"}${Data.Name}`}</h5>
        <p><GoLocation />India <span><FaBirthdayCake />{Data.Date} {Data.Month} {Data.Year}</span></p>
      <div className={style.follow}>
        <h5>Followers :- 2000</h5>
        <h5>Following :- 154</h5>
        </div>
      </div>
    </div>
    {/* <hr style={{border:'2px solid black'}} /> */}
    <div className={style.replies}>
      <h4>Tweet</h4>
      <h4>Tweet & replies</h4>
      <h4>Media</h4>
      <h4>Likes</h4>
    </div>
    {PersonalTweets.map((data) => {
        return (
          <div className={style.wrapper}>
            <div className={style.container1}>
              <div  onClick={ ()=>xyz(({
                name  : data.name,
                handlerName : data.handlerName  ,
                organization : data.organization,
                tweetText : data.tweetText,
                tweetPic : data.tweetPic,
              
                tweetCount : data.tweetCount,
                retweetCount : data.retweetCount,
                likesCount : data.likesCount,
                viewsCount : data.viewsCount,
                followers : data.followers,
                followings : data.followings,
              
                
                
              } )) } >
              
                <Avatar   className={style.avatar} src={data.tweetPic} />
               
              </div>

              <div className={style.innercontainer}>
                <span className={style.text}>
                  <h3>{data.name}<VerifiedIcon style={{color:"blue"}}/></h3>
                  
                </span>
                <p>{data.handlerName}</p>
                <h4>{data.tweetText}</h4>
              </div>
            </div>

            <div className={style.img1}>
              <img
                style={{ width: "30rem", height: "30rem",borderRadius:"15px" }}
                alt="Picture"
                src={data.tweetPic}
              />
            </div>
            <div className={style.icons}>
                  <span>
                    {data.tweetCount}
                    <ChatBubbleOutlineIcon />
                  </span>
                  <span>
                    {data.retweetCount}
                    <SyncIcon />
                  </span>
                  <span>
                    {data.likesCount}{likesCount}
                    <FavoriteBorderIcon  onClick={handleLike}
                      // {
                      //   ...likesCount ? (setLikesCount(likesCount+1)) : (setLikesCount(likesCount-1))
                      // }
                    />
                  </span>
                  <span>
                    {data.viewsCount}
                    <PollIcon />
                  </span>

                  <UploadIcon />
                </div>
          </div>
        );
      })}
{/* 
    <RightContainer2
    /> */}
    </>
  );
}

export default ProfileSection;
