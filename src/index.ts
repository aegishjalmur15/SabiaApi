import 'reflect-metadata';
import express from 'express';
import Routes from './Router'
import cors from 'cors';

import "./database/connections.ts"
import dotenv from 'dotenv';
import path from 'path';
const app = express();
app.use(cors())
app.use(express.json());

app.use(Routes)
app.use("/uploads", express.static(path.join(__dirname,"..","uploads")))

app.listen(process.env.PORT, () => {console.log("we are on")})