import React, { useContext } from 'react';
import { CursorContext, DlocContext, SlocContext } from '../App';
import astar from './astar';
export default function Header(){

    const {cursorState, setCursorState} = useContext(CursorContext);
    const {sloc} = useContext(SlocContext);
    const {dloc} = useContext(DlocContext);
    const handleFind = (event)=>{
        event.preventDefault();
        if(cursorState === "source" || cursorState === "destination"){
            alert("Set both source and destination")
        }
        else{
            var x = astar(sloc, dloc);
            console.log(x);
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
        document.getElementById("res").innerHTML = "";
    }

    return <div style={{textAlign:"center"}}>
        <br/>
        <button onClick={handleFind}>Find Path</button>
        <button onClick={handleReset}>Reset</button>
        <p id="res"></p>
    </div>
}