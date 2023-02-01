import React from "react";
import style from "./ProfileSection.module.css";
import WestIcon from "@mui/icons-material/West";
import CustomButton from "../../../Atom/Button/CustomButton";
import { useNavigate } from "react-router-dom";
import RightContainer2 from "../../rightContainer/RightContainer2/RightContainer2"
import { GoLocation } from "react-icons/go";
import { FaBirthdayCake } from "react-icons/fa";

function ProfileSection() {
   const nevigate = useNavigate();

  
  let Data = JSON.parse(localStorage.getItem("user0"));
 
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
    <hr style={{border:'2px solid black'}} />

    <RightContainer2
    />
    </>
  );
}

export default ProfileSection;
