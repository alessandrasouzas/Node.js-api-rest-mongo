import express from "express";

const app = express();
app.use(express.json()); //Função middleware do tipo json
/*
    Funções de Middleware tem acesso ao objeto de solicitação (req), 
        o objeto de resposta (res), e a próxima função de middleware no ciclo solicitação-resposta do aplicativo. 
        A próxima função middleware é comumente denotada por uma variável chamada next.
*/

const livros = [
    {
        id: 1,
        titulo: "O senhor dos Anéis"
    },
    {
        id: 2,
        titulo: "O Hobbit"
    }    
]

app.get("/", (req, res) => {
    res.status(200).send('Curso de Node.js')
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso");
});


export default app;