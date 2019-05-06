# Graphs
This assignment implements a graph data structure.

## Challenge
Implement your own Graph. The graph should be represented as an adjacency list, and should include the methods listed in the API section. 

Write tests to prove the following functionality:

Node can be successfully added to the graph
An edge can be successfully added to the graph
A collection of all nodes can be properly retrieved from the graph
All appropriate neighbors can be retrieved from the graph
Neighbors are returned with the weight between nodes included
The proper size is returned, representing the number of nodes in the graph
A graph with only one node and edge can be properly returned
An empty graph properly returns null

## Approach & Efficiency
Time efficiency: O(n)
Space efficiency: O(n)

## API
- AddNode()
Adds a new node to the graph
Takes in the value of that node
Returns the added node

- AddEdge()
Adds a new edge between two nodes in the graph
Include the ability to have a “weight”
Takes in the two nodes to be connected by the edge
Both nodes should already be in the Graph

- GetNodes()
Returns all of the nodes in the graph as a collection (set, list, or similar)

- GetNeighbors()
Returns a collection of nodes connected to the given node
Takes in a given node
Include the weight of the connection in the returned collection

- Size()
Returns the total number of nodes in the graph

# Breadth-First Traversal of a Graph
This code challenge requires doing a breadth first traversal of a graph and logging values.

## Challenge
Extend your graph object with a breadth-first traversal method that accepts a starting node. Without utilizing any of the built-in methods available to your language, return a collection of nodes in the order they were visited. Display the collection.

## Approach & Efficiency
- Time: O(n)
- Space: O(n)

## Solution
![alt]()