// Project 2 by Muugii, Cassidy, Brandon and Tim
// Created on November 17, 2022
// base server file 

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Now listening at ${PORT}, Let's Go!`)
});
