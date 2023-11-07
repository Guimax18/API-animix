import mongoose from "mongoose";
import { CategoriaSchema } from "./Categoria.js";
import { AnimeSchema } from "./Anime.js";

const roupaSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  categoria: CategoriaSchema,
  anime:  AnimeSchema,
  tamanho: { type: String },
  valor: { type: Number },
  cor: { type: String }
}, { versionKey: false });

const roupa = mongoose.model("roupas", roupaSchema);

export default roupa;
