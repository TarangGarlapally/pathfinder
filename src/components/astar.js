import { useContext } from "react";
import { SlocContext } from "../App";

export default function Astar(sloc){
    var open = [sloc.split(" ")];
    alert(open[0][0]);
    return sloc;
}