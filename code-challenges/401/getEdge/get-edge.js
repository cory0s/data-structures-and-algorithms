'use strict';


function getEdge(graph, arr){
    let price = 0;

    if(!graph.adjacencyList[arr[0]]){
        return false;
    }

    for(let i=0; i < arr.length-1; i++){
        graph.getNeighbors(arr[i]).forEach(neighbor => {
            if(arr[i+1] === neighbor){
                console.log(neighbor);
                price = price + neighbor[arr[i]].weight;
            } else {
                return false;
            }

        })
    }
    return price;
}

module.exports = getEdge;