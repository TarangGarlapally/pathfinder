import React from "react";
import GridCube from "./GridCube";

export default function Grid(){

    const grid_list = [];
    for (let i = 0; i < 20; i++) {
        let l = [];
        for (let j = 0; j < 40; j++) {
            let color = "white";
            let type = "blank";
            l.push({
                id: i.toString()+" "+j.toString(),
                color: color,
                type: type
            });
        }
        grid_list.push(l);
    }


    return <div className="grid">
        {grid_list.map((item, index)=>{
            return <div className="gridOut" key={index}>
                {item.map((inner_item, inner_index)=>{
                
                    return <GridCube
                        id = {inner_item.id.toString()} 
                        key={inner_index} 
                        color={inner_item.color} 
                        type={inner_item.type}
                    />
                })}
                </div>
        })}
    </div>
}