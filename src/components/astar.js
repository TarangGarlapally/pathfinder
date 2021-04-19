
function drawPath(closed){
    var item = closed[closed.length - 1];
    if(item.p === null){
        return;
    }
    while(item.p !== null){
        for(let i = 0; i<closed.length; i++){
            if(closed[i].id == item.p){
                item = closed[i];
                break;
            }
        }
        if(item.p===null)
        break;
        document.getElementById((item.id[0]).toString()+" "+(item.id[1]).toString()).style.backgroundColor = "blue";
    }
}

export default function astar(sloc, dloc){
    sloc = sloc.split(" ");
    dloc = dloc.split(" ");
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
    // graph = [];
    // for(let i = 0; i < 20;i++){
    //     let t = []
    //     for(let j =0;j<40;j++){
            
    //     }
    // }
    var closed = [];
    var open = [{f: 0, g:0, h:0, id: [parseInt(sloc[0]),parseInt(sloc[1])],p:null}];

    function checkinOpen(temp){
        for(let i = 0; i<open.length; i++){
            if(open[i].id === temp.id && open[i].f < temp.f)
            return true;
        }
        return false;
    }

    function checkinClosed(temp){
        for(let i = 0;i <closed.length; i++){
            if(closed[i].id === temp.id && closed[i].f < temp.f){
                return true;
            }
        }
        return false;
    }

    while(open.length !== 0){
        var id = smallest(open);
        var q = open[id];
        console.log(q);
        open.splice(id, 1);
        var dx = [0,0,1,1,1,-1,-1,-1];
        var dy = [1,-1,0,1,-1,0,1,-1];
        let flag = false;
        let temp = null;
        for(let k = 0; k<8; k++){
            if(q.id[0]+dx[k]<0 || q.id[0]+dx[k]>=20 || q.id[1]+dy[k]<0 || q.id[1]+dy[k]>=40)
            continue;
            
            if(document.getElementById((q.id[0]+dx[k]).toString()+" "+(q.id[1]+dy[k]).toString()).style.backgroundColor === "black")
            continue;
            
            let g = q.g + 1;
            let h = Math.sqrt(Math.pow(q.id[0]+dx[k] - parseInt(dloc[0]), 2) + Math.pow(q.id[1]+dy[k] - parseInt(dloc[1]),2));
            temp = {f: g+h, g: g, h:h, id: [q.id[0]+dx[k], q.id[1]+dy[k]], p: q.id};
            
            if(q.id[0]+dx[k] === parseInt(dloc[0]) && q.id[1]+dy[k] === parseInt(dloc[1])){    
                flag = true;
                break;
            }
            else if(checkinOpen(temp)){
                continue;
            }
            else if(checkinClosed(temp)){
                continue;
            }
            else{
                if(q.id[0]+dx[k]!==parseInt(sloc[0]) && q.id[1] + dy[k]!== parseInt(sloc[1]))
                    document.getElementById((q.id[0]+dx[k]).toString()+" "+(q.id[1]+dy[k]).toString()).style.backgroundColor = "orange";
                if(!open.includes(temp))
                open.push(temp);
            }
        }
        
        closed.push(q);
        if(flag === true){
            closed.push(temp);
            break;
        }
    }

    drawPath(closed);

    return closed;
}