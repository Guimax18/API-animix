import animes from "../models/Anime.js";

class AnimeControler {

    static async listarAnimes (req, res) {
        try{
            const listaAnimes = await animes.find({});
            res.status(200).json(listaAnimes);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição` });
        }
    };

    static async listarAnimesPorId (req, res) {
        try{
            const id = req.params.id;
            const animeEncontrado = await animes.findById(id);
            res.status(200).json(animeEncontrado);
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na requisição do anime` });
        }
    };

    static async cadastrarAnime (req, res) {
        try {
            const novoAnime = await animes.create(req.body);
            res.status(201).json({ message: "criado com sucesso",  animes: novoAnime});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha ao cadastrar Anime` });
        }
    }

    static async atualizarAnime (req, res) {
        try{
            const id = req.params.id;
            await animes.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "anime atualizado"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na atualização do anime` });
        }
    };

    static async excluirAnime (req, res) {
        try{
            const id = req.params.id;
            await animes.findByIdAndDelete(id);
            res.status(200).json({message: "Anime excluida com sucesso"})
        } catch (erro) {
            res.status(500).json({message: `${erro.message} - falha na remoção do anime` });
        }

    }

};

export default AnimeControler;