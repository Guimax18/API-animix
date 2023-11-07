import users from "../models/User.js";

class UserController {

    static async listarLogins (req, res) {
        try{
            const listaUser = await user.find({});
            res.status(200).json(this.listaUser);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição` });
        }
    };

    static async listarusersPorId (req, res) {
        try{
            const id = req.params.id;
            const userEncontrado = await Login.findById(id);
            res.status(200).json(userEncontrado);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição do user` });
        }
    };

    static async cadastrarUser (req, res) {
        try {
            const novoUser = await User.create(req.body);
            res.status(201).json({ message: "criado com sucesso",  user: novoUser});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar user` });
        }
    }

    static async atualizarUser (req, res) {
        try{
            const id = req.params.id;
            await users.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "user atualizado"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na atualização do user` });
        }
    };

    static async excluirUser (req, res) {
        try{
            const id = req.params.id;
            await user.findByIdAndDelete(id);
            res.status(200).json({message: "User excluido com sucesso"})
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na remoção do user` });
        }

    }

};

export default UserController;