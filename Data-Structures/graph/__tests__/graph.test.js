'use strict';

let Graph = require('../graph.js');

describe('Test Graph class', () => {
  
    it('Should successfully add a node', () => {
        let graph = new Graph.Graph();
        graph.addNode('WA');

      expect(graph).toBeDefined();
    });

    it('Should successfully add an edge', () => {
        let graph = new Graph.Graph();
        graph.addNode('WA');
        graph.addNode('CA');
        graph.addDirectedEdge('CA', 'WA', 1);
      expect(graph).toBeDefined();
    });

    it('Nodes can be retrieved from graph', () => {
        let graph = new Graph.Graph();
        graph.addNode('WA');
        graph.addNode('CA');

      expect(graph.getNodes()).toEqual([{'value': 'WA'}, {'value':'CA'}]);
    });

    it('Neighbors can be retrieved from graph', () => {
        let graph = new Graph.Graph();
        graph.addNode('WA');
        graph.addNode('CA');

      expect(graph.getNeighbors('WA')).toBe({'value': 'CA'});
    });

    it('Neighbors are returned with weight', () => {
        let graph = new Graph.Graph();
        graph.addNode('WA');
        graph.addNode('CA');

      expect(graph.getNeighbors('WA')).toBe({'value': 'CA'});
    });

    it('Proper size is returned', () => {
        let graph = new Graph.Graph();
        graph.addNode('WA');
        graph.addNode('CA');

      expect(graph.size()).toEqual(2);
    });
});