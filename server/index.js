const express = require('express');
const app = express();
const port = 3000; 

const data = [
        {
            id: 1000,
            accountNumber: 23456,
            customerName: "Manuel",
            address: "Porto"
        },
        {
            id: 1001,
            accountNumber: 34556,
            customerName: "Maria",
            address: "Porto"
        },
        {
            id: 1002,
            accountNumber: 565675,
            customerName: "Severino",
            address: "Lisboa"
        },
        {
            id: 1003,
            accountNumber: 6867867,
            customerName: "Antonio",
            address: "Braga"
        },
        {
            id: 1004,
            accountNumber: 45783,
            customerName: "Luiza",
            address: "Viseu"
        },
    ];

// http://localhost:3000/api/accounts
app.get('/api/accounts', (req, res) => {
    res.json(data);
});

// http://localhost:3000/api/accounts/{accountNumber}/account-number
app.get('/api/accounts/:accountNumber/account-number', (req, res) => {

    var dataFiltered = data.filter( json => {
        return json.accountNumber == req.params.accountNumber;
    });

    res.json(dataFiltered);
});

app.listen(port, () => {
    console.log(`Servidor BFF rodando em http://localhost:${port}`);
});  