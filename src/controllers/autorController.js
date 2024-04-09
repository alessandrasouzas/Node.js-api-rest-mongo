import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutores (req, res) {      
       try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);    
       } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar livros`});
       }
    }

    static async cadastrarAutores (req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ 
                message: "criado com sucesso", 
                autor: novoAutor
            });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar autor`});
        }        
    }

    static async listarAutorPorId (req, res) {      
       try {
            const id = req.params.id;
            const livroEncontrado = await autor.findById(id);
            res.status(200).json(livroEncontrado);    
       } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao listar o autor`});
       }
    }

    static async atualizarAutor (req, res) {      
        try {
             const id = req.params.id;
             await autor.findByIdAndUpdate(id, req.body);
             res.status(200).json({ message: "autor atualizado"});    
        } catch (error) {
             res.status(500).json({ message: `${error.message} - falha ao atualizar autor`});
        }
    }

    static async excluirAutorPorId (req, res) {      
        try {
             const id = req.params.id;
             await autor.findByIdAndDelete(id);
             res.status(200).json({ message: "autor removido com sucesso"});    
        } catch (error) {
             res.status(500).json({ message: `${error.message} - falha ao remover o autor`});
        }
    }

};


export default AutorController;