import React, { useState } from "react";
import FileExplorer from "./FileExplorer";
import explorer from "./data";
import useTraverseTree from "./use-traverse-tree";
const FileExplorerApp = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode, deleteNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const updatedTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(updatedTree);
  };

  const handleDeleteNode = (nodeId) => {
    const updatedTree = deleteNode(explorerData, nodeId);
    setExplorerData(updatedTree);
  };

  return (
    <div>
      <FileExplorer
        explorer={explorerData}
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
      />
    </div>
  );
};

export default FileExplorerApp;
