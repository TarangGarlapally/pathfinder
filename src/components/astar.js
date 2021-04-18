
export default function astar(sloc, dloc){

    function smallest(l) {
        let m = 2000;
        let id = -1;
        for(let i = 0; i<l.length; i++){
            if(l[i].f <= m){
                m = l[i].f;
                id = i;
            }
        }
        return id;
       }

    var open = [{f: 0,id: sloc.split(" ")},{f:2, id: [0,1]}];
    while(open.length !== 0){
        var id = smallest(open);
        var q = open[id];
        open.splice(id, 1);
        var dx = [0,0,1,1,1,-1,-1,-1];
        var dy = [1,-1,0,1,-1,0,1,-1];

        for(let k = 0; k<8; k++){
            
        }
    }
    return sloc;
}