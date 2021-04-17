import React from "react";
import GridCube from "./GridCube";

export default function Grid(){

    const grid_list = [];

    for (let i = 0; i < 20; i++) {
        let l = [];
        for (let j = 0; j < 40; j++) {
            l.push([]);
        }
        grid_list.push(l);
    }


    return <div className="grid">
        {grid_list.map((item, index)=>{
            return <div className="gridOut">{item.map((inner_item, inner_index)=><GridCube key={inner_index} color={index === 19 && inner_index === 39?"green":""}/>)}</div>
        })}
    </div>
}