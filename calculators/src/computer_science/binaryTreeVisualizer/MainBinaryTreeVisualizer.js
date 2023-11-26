import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { BinarySearchTreeNode, drawBinaryTree, VisualizationType } from 'binary-tree-visualizer';
import AVLTree from 'avl';

function MainBinaryTreeVisualizer() {
    const [inputValue, setInputValue] = useState('');
    const [avlTree, setAvlTree] = useState(new AVLTree());
    const [binarySearchTree, setBinarySearchTree] = useState(null);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddNode = () => {
        const value = parseInt(inputValue, 10);
        if (!isNaN(value)) {
            avlTree.insert(value);
            setInputValue('');
            updateBinarySearchTree();
        }
    };

    const buildBalancedBST = (sortedList) => {
        if (sortedList.length === 0) {
            return null;
        }

        const medianIndex = Math.floor(sortedList.length / 2);
        const node = new BinarySearchTreeNode(sortedList[medianIndex]);

        node.left = buildBalancedBST(sortedList.slice(0, medianIndex));
        node.right = buildBalancedBST(sortedList.slice(medianIndex + 1));

        return node;
    };

    const updateBinarySearchTree = () => {
        const sortedList = [];
        avlTree.forEach((node) => sortedList.push(node.key));

        const newTree = buildBalancedBST(sortedList);
        setBinarySearchTree(newTree);
    };

    useEffect(() => {
        if (binarySearchTree) {
            drawBinaryTree(binarySearchTree, document.querySelector('#binaryTreeCanvas'), {
                type: VisualizationType.HIGHLIGHT,
            });
        }
    }, [binarySearchTree]);

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
