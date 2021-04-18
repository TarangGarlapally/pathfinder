import React, { useState } from "react";

export default function GridCube(props){
    const [type,setType] = useState("blank");
    const handlePress = (event)=>{
        event.target.style.backgroundColor = "black";
        setType("wall");
    }
    // eslint-disable-next-line no-useless-concat
    return <div className={"gridCube "+props.color} onDragOver={handlePress}></div>
}