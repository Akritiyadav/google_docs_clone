import React, { useEffect, useRef } from "react";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';

const TitleBar = () => {
    const inputRef = useRef(null);

    useEffect(() => {
      adjustInputWidth()
    }, []);

    const adjustInputWidth = () => {
        if (inputRef.current) {
          const inputElement = inputRef.current;
          inputElement.style.width = 0;    
          inputElement.style.width = `${inputElement.scrollWidth}px`; 
        }
      };

    const handleInputChange = () => {
        adjustInputWidth();
      };

  return (  
    <>
      <div className="flex flex-row space-x-5">
        <input
          type="text"
          defaultValue="Untitiled Document"
          className="text-[20px] font-normal text-text rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
          ref={inputRef}
          onChange={handleInputChange}
        />
        <span className="material-symbols-outlined translate-y-1 "><StarBorderIcon/> </span>
        <span className="material-symbols-outlined translate-y-1 cursor-pointer">
          <CloudDoneOutlinedIcon/>
        </span>
        <span className="material-symbols-outlined translate-y-1 cursor-pointer"><InsertDriveFileOutlinedIcon/> </span>
      </div>
    </>
  );
};

export default TitleBar;
