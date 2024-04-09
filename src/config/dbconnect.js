import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

//mongoose é a biblioteca que conecta a api com o mongo (interface entre banco e ap)
async function conectaNaDatabase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);    
    return mongoose.connection;
};

export default conectaNaDatabase;
