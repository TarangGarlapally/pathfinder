import React, { useContext, useState } from "react";
import { CursorContext, DlocContext, SlocContext } from "../App";

export default function GridCube(props){
    const [type,setType] = useState(props.type);
    const {cursorState, setCursorState} = useContext(CursorContext);
    const {setSloc} = useContext(SlocContext); 
    const {setDloc} = useContext(DlocContext);
    const handleDragOver = (event)=>{
        if(type === "source" || type === "destination"){
            return;
        }
        event.target.style.backgroundColor = "black";
        setType("wall");
    }

    const handleClick = (event)=>{
        if(cursorState === "source"){
            event.target.style.backgroundColor = "green";
            setType("source");
            setSloc(event.target.id);
            setCursorState("destination");
            return;
        }
        if(cursorState === "destination"){
            event.target.style.backgroundColor = "red";
            setType("destination");
            setDloc(event.target.id);
            setCursorState("blank");
            return;
        }
        handleDragOver(event);
    }


    // eslint-disable-next-line no-useless-concat
    return <div 
            id = {props.id} 
            type={type} 
            className={"gridCube "+props.color} 
            onDragOver={handleDragOver} 
            onClick={handleClick}
        />
}