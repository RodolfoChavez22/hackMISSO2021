import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json({
    limit: "30mb",
    extended: true
}));

app.use(express.urlencoded({
    limit: "30mb",
    extended: true
}));

app.use(cors());

console.log('Server index.js working');