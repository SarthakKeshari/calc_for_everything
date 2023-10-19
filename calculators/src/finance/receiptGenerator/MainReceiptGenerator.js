
import React, { useState } from "react";
import {
    Container,
    Typography,
    TextField,
    Button,
    Paper,
    Grid,
} from "@mui/material";

function MainReceiptGenerator() {
    const [customerName, setCustomerName] = useState("");
    const [items, setItems] = useState([]);
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [totalAmount, setTotalAmount] = useState(0);

    const addItem = () => {
        if (itemName && itemPrice) {
            const newItem = { name: itemName, price: parseFloat(itemPrice) };
            setItems([...items, newItem]);
            setItemName("");
            setItemPrice("");
            setTotalAmount(totalAmount + newItem.price);
        }
    };

    const generateReceipt = () => {
        const receiptContent = `Customer Name: ${customerName}\n\nItems:\n${items
            .map((item) => `${item.name}: $${item.price.toFixed(2)}`)
            .join("\n")}\n\nTotal Amount: $${totalAmount.toFixed(2)}`;

    };


    return (
        <Container maxWidth="lg" sx={{ bgcolor: '#eeeeee', minHeight: '90vh', paddingY: "10" }}>
            <Typography pt={1} variant='h5' sx={{ textAlign: "center" }}>Receipt Generator</Typography>
            <hr />
            <br />
            <Paper elevation={3} sx={{ padding: 2, margin: 2 }}>
                <TextField
                    label="Customer Name"
                    variant="outlined"
                    fullWidth
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                />
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            label="Item Name"
                            variant="outlined"
                            fullWidth
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Item Price"
                            variant="outlined"
                            fullWidth
                            type="number"
                            value={itemPrice}
                            onChange={(e) => setItemPrice(e.target.value)}
                        />
                    </Grid>
                </Grid>
                <Button variant="contained" color="primary" onClick={addItem}>
                    Add Item
                </Button>
                <Typography variant="h6" sx={{ marginTop: 2 }}>
                    Items:
                </Typography>
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            {item.name}: ${item.price.toFixed(2)}
                        </li>
                    ))}
                </ul>
                <Typography variant="h6">
                    Total Amount: ${totalAmount.toFixed(2)}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: 2 }}
                    onClick={generateReceipt}
                >
                    Generate Receipt
                </Button>
            </Paper>
        </Container>
    )
}

export default MainReceiptGenerator;