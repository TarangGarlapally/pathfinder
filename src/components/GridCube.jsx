import React, { useState } from "react";

export default function GridCube(props){
    const [type,setType] = useState(props.type);
    const handleDragOver = (event)=>{
        if(type === "source" || type === "destination")
            return;
        event.target.style.backgroundColor = "black";
        setType("wall");
    }


    // eslint-disable-next-line no-useless-concat
    return <div 
            id = {props.id} 
            type={type} 
            className={"gridCube "+props.color} 
            onDragOver={handleDragOver} 
            onClick={handleDragOver}
        />
}