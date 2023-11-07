import categorias from "../models/Categoria.js";

class CategoriaController {

    static async listarCategorias (req, res) {
        try{
            const listaCategorias = await categorias.find({});
            res.status(200).json(listaCategorias);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição` });
        }
    };

    static async listarCategoriasPorId (req, res) {
        try{
            const id = req.params.id;
            const categoriaEncontrada = await categorias.findById(id);
            res.status(200).json(categoriaEncontrada);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição da categoria` });
        }
    };

    static async cadastrarRoupa (req, res) {
        try {
            const novaCategoria = await categorias.create(req.body);
            res.status(201).json({ message: "criado com sucesso",  categoria: novaCategoria});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar Categoria` });
        }
    }

    static async atualizarCategorias (req, res) {
        try{
            const id = req.params.id;
            await categorias.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "categoria atualizada"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na atualização da categoria` });
        }
    };

    static async excluirCategoria (req, res) {
        try{
            const id = req.params.id;
            await categorias.findByIdAndDelete(id);
            res.status(200).json({message: "Categoria excluida com sucesso"})
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na remoção da categoria` });
        }

    }

};

export default CategoriaController;