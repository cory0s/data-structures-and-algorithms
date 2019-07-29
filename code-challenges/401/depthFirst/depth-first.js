'use strict';

function depthFirst(graph, root, list){
    
    let answers = [];

    if(root===null){
        return null;
    }

    if(!answers.includes(root)){
        answers.push(root);
    }

    root.neighbors.forEach(neighbor => {
        if(!answers.includes(neighbor)){
            answers.push(neighbor);
            depthFirst(graph, neighbor, list);
        }
    })
    return answers;
}

module.exports = depthFirst;