import mongoose from "mongoose";

const AnimeSchema = new mongoose.Schema({
    nome: { type: String, required: true }
}, { versionKey: false });

const anime = mongoose.model("anime", AnimeSchema);

export {anime, AnimeSchema};