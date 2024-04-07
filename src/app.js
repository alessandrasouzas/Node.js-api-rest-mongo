import express from "express";
import conectaDataBase from "./config/dbconnect.js";

const conexao = await conectaDataBase();

conexao.on("error", (error) =>{
    console.error("Erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso.");
});

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

function buscaLivro(id) {
    return livros.findIndex(livros => {
        return livros.id === Number(id)
    })
};

app.get("/", (req, res) => {
    res.status(200).send('Curso de Node.js')
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso");
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("livro removido com sucesso");
})

export default app;