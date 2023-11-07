import roupas from "../models/roupa.js";

class RoupaController {

    static async listarRoupas (req, res) {
        try{
            const listaRoupas = await roupas.find({});
            res.status(200).json(listaRoupas);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição` });
        }
    };

    static async listarRoupasPorId (req, res) {
        try{
            const id = req.params.id;
            const roupaEncontrada = await roupas.findById(id);
            res.status(200).json(roupaEncontrada);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição da roupa` });
        }
    };

    static async cadastrarRoupa (req, res) {
        try {
            const novaRoupa = await roupas.create(req.body);
            res.status(201).json({ message: "criado com sucesso",  roupa: novaRoupa});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar livro` });
        }
    }

    static async atualizarRoupas (req, res) {
        try{
            const id = req.params.id;
            await roupas.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "livro atualizado"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na atualização da roupa` });
        }
    };

    static async excluirRoupa (req, res) {
        try{
            const id = req.params.id;
            await roupas.findByIdAndDelete(id);
            res.status(200).json({message: "Roupa excluida com sucesso"})
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na remoção da roupa` });
        }

    }

};

export default RoupaController;