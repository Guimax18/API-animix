import mongoose from "mongoose";

const CategoriaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.ObjectId },
    nome: {type: String, required: true}
}, { versionKey: false });

const categoria = mongoose.model("categorias", CategoriaSchema);

export { categoria, CategoriaSchema};
