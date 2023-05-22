import React from "react";
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';

const ProfileBar = () => {
  return (
    <>
      <div className="flex flex-row space-x-5 mt-2 cursor-pointer">
        <span class="material-symbols-outlined"><TimelineOutlinedIcon/></span>
        <span class="material-symbols-outlined"><VideocamOutlinedIcon/></span>

        <div className="flex flex-row space-x-1">
          <span class="material-symbols-outlined"><ChatBubbleOutlineOutlinedIcon/></span>
          <span class="material-symbols-outlined"><ArrowDropDownOutlinedIcon/></span>
        </div>
        <div className="flex flex-row bg-blue-200 rounded-3xl px-5 py-2 -translate-y-2 space-x-2">
          <span class="material-symbols-outlined"><LockOpenOutlinedIcon/></span>
          <p>Share</p>
        </div>
        <img
          className="shadow-md rounded-full h-10 w-10 -translate-y-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEonb3HZARU1rTROedCGyhseQLaM4qzbVFsI539A4VXpFyd9Xg7WvXwb6wZJuHVOu-i-0&usqp=CAU"
          alt=""
        />
      </div>
    </>
  );
};

export default ProfileBar;
