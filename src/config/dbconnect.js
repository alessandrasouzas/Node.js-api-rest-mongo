import mongoose, { mongo } from "mongoose";

//mongoose é a biblioteca que conecta a api com o mongo (interface entre banco e api)
async function conectaDataBase() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.tnzgohy.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0")
    return mongoose.connection;    
};

export default conectaDataBase;