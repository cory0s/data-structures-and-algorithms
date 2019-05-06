'use strict';

class Vertex{
    constructor(value){
        this.value = value;
    }
}

class Edge{
    constructor(vertex, weight){
        this.vertex = vertex;
        this.weight = weight;
    }
}

class Graph{

    constructor(){
        this.adjacencyList = new Map();
        this.size = 0;
    }

    addNode(value){
        let vertex = new Vertex(value);
        this.adjacencyList.set(vertex, []);
        this.size++;
        return vertex;
    }

    addDirectedEdge(startVertex, endVertex, weight){
        let edges = this.adjacencyList.get(startVertex);
        edges.push(new Edge(endVertex, weight));
    }

    addUndirectedEdge(start, end, weight){
        this.addDirectedEdge(start, end, weight);
        this.addDirectedEdge(end, start, weight);
    }

    getNodes(){
        let all = [];
        let values = this.adjacencyList.keys();
        for(let value of values){
            all.push(value);
        }
        return all;
        // return [...this.adjacencyList.keys()];
    }

    getNeighbors(vertex){
        return [...this.adjacencyList.get(vertex)];
    }

    size(){
        return this.size;
    }

    print(){
        for(const[key,value] of this.adjacencyList){
            console.log(key,value);
        }
    }
}

module.exports = { Vertex, Edge, Graph };