import mongoose, { mongo } from "mongoose";

//mongoose é a biblioteca que conecta a api com o mongo (interface entre banco e ap)
async function conectaDataBase() {
    mongoose.connect(process.env.DB_CONNETION_STRING);
    return mongoose.connection;    
};

export default conectaDataBase;