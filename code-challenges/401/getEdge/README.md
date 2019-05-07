# Find Edges
Given a business trip itinerary, and an Alaska Airlines route map, is the trip possible with direct flights? If so, how much will the total trip cost be?

## Challenge
Write a function based on the specifications above, which takes in a graph, and an array of city names. Without utilizing any of the built-in methods available to your language, return whether the full trip is possible with direct flights, and how much it would cost.

## Approach & Efficiency
My approach involved iterating the input array, and searching the graph hash map for contained values. If each consecutive value exists in the hash table, it is checked for a connecting edge and the price is increased if exists.

Space efficiency: O(1)
Time efficiency: O(n)

## Solution
![alt]()