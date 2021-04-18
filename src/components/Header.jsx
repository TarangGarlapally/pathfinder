import React, { useContext } from 'react';
import { CursorContext, SlocContext } from '../App';
import astar from './astar';
export default function Header(){

    const {cursorState, setCursorState} = useContext(CursorContext);
    const {sloc} = useContext(SlocContext);
    const handleFind = (event)=>{
        event.preventDefault();
        if(cursorState === "source" || cursorState === "destination"){
            alert("Set both source and destination")
        }
        else{
            document.getElementById("res").innerHTML = astar(sloc);
        }
    }

    const handleReset = (event)=>{
        event.preventDefault();
        for(let i = 0; i < 20; i++){
            for(let j = 0; j < 40; j++){
                document.getElementById(i.toString()+" "+j.toString()).style.backgroundColor = "white";
            }
        }
        setCursorState("source");
        document.getElementById("res").innerHTML = ""
    }

    return <div style={{textAlign:"center"}}>
        <br/>
        <button onClick={handleFind}>Find Path</button>
        <button onClick={handleReset}>Reset</button>
        <p id="res"></p>
    </div>
}