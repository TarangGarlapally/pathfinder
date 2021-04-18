import React from "react";
import GridCube from "./GridCube";

export default function Grid(){

    const grid_list = [];
    let c = 0;
    for (let i = 0; i < 20; i++) {
        let l = [];
        for (let j = 0; j < 40; j++) {
            console.log(c);
            let color = "white";
            let type = "blank";
            if(c === 0){
                color = "green";
                type = "source";
            }
            if(c === 799){
                color = "red";
                type = "destination";
            }
            l.push({
                id: c,
                color: color,
                type: type
            });
            c += 1;
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