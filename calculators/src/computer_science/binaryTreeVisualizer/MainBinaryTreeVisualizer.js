import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { BinarySearchTreeNode, drawBinaryTree, VisualizationType } from 'binary-tree-visualizer';
import AVLTree from 'avl';

function MainBinaryTreeVisualizer() {
    const [inputValue, setInputValue] = useState('');
    
    // Initialize the AVL tree with the value 10
    const initialAvlTree = new AVLTree();
    initialAvlTree.insert(10);
    
    const [avlTree, setAvlTree] = useState(initialAvlTree);
    const [binarySearchTree, setBinarySearchTree] = useState(null);

    useEffect(() => {
        updateBinarySearchTree();
    }, []);

    // Handles changes in the input field
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // Handles the addition of a new node
    const handleAddNode = () => {
        const value = parseInt(inputValue, 10);
        if (!isNaN(value)) {
            avlTree.insert(value); // Insert into AVL tree for balancing
            setInputValue(''); // Reset input value
            updateBinarySearchTree(); // Update the visualized binary search tree
        }
    };

    // Recursively builds a balanced binary search tree from a sorted list
    const buildBalancedBST = (sortedList) => {
        if (sortedList.length === 0) {
            return null;
        }

        const medianIndex = Math.floor(sortedList.length / 2);
        const node = new BinarySearchTreeNode(sortedList[medianIndex]);
        // Build left and right subtrees recursively
        node.left = buildBalancedBST(sortedList.slice(0, medianIndex));
        node.right = buildBalancedBST(sortedList.slice(medianIndex + 1));

        return node;
    };

    // Updates the binary search tree used for visualization
    const updateBinarySearchTree = () => {
        const sortedList = [];
        avlTree.forEach((node) => sortedList.push(node.key)); // Get sorted list from AVL tree

        const newTree = buildBalancedBST(sortedList); // Build a balanced BST
        setBinarySearchTree(newTree); // Update the state
    };

    // Redraw the binary search tree whenever it changes
    useEffect(() => {
        if (binarySearchTree) {
            drawBinaryTree(binarySearchTree, document.querySelector('#binaryTreeCanvas'), {
                type: VisualizationType.HIGHLIGHT,
            });
        }
    }, [binarySearchTree]);

    // Render the component
    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Binary Tree Visualizer</Typography>
            <hr />
            <TextField
                label="Enter a number"
                variant="outlined"
                value={inputValue}
                onChange={handleInputChange}
                style={{ marginRight: '10px' }}
            />
            <Button variant="contained" onClick={handleAddNode}>Add Node</Button>
            <canvas id="binaryTreeCanvas" width="800" height="600" style={{ marginTop: '10px' }} />
        </Container>
    );
}

export default MainBinaryTreeVisualizer;
