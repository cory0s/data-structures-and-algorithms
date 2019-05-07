let Graph = require('../../../../Data-Structures/graph/graph.js');
let graph = new Graph();
const getEdge = require('../get-edge.js');

let a = graph.addNode('WA');
let b = graph.addNode('CA');
let c = graph.addNode('OR');
graph.addDirectedEdge(a, b, 100);
console.log(graph.adjacencyList);
console.log(graph.getNeighbors(a));
getEdge(graph, [a,b]);

// console.log(graph.adjacencyList);

describe('Test Graph class', () => {
  
    it('Should successfully add a node', () => {
        let graph = new Graph();
        graph.addNode('WA');

      expect(graph).toBeDefined();
    });

    it('Should successfully add a node', () => {
        let a = graph.addNode('WA');
        let b = graph.addNode('CA');
        let c = graph.addNode('OR');
        graph.addDirectedEdge(a, b, 100);

      expect(getEdge(graph, [a,b])).toBe(100);
    });
});