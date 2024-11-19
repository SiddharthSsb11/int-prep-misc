import React from "react";

const useTraverseTree = () => {
  const insertNode = (tree, folderId, item, isFolder) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });

      return tree;
    }

    let latestNode;
    latestNode = tree.items.map((obj, index) => {
      return insertNode(obj, folderId, item, isFolder);
    });
    return { ...tree, items: latestNode };
  };

  // Delete a node from the tree
  const deleteNode = (tree, nodeId) => {
    // If the tree's items contain the node to be deleted
    const filteredItems = tree.items.filter((item) => item.id !== nodeId);

    // If the current tree node contains items, recursively process them
    const updatedItems = filteredItems.map((item) => {
      return deleteNode(item, nodeId);
    });

    // Return the updated tree with filtered items
    return { ...tree, items: updatedItems };
  };

  return { insertNode, deleteNode };
};

export default useTraverseTree;
