import mongoose from "mongoose";

const roupaSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  categoria: {type: String},
  anime:  {type: String, required: true},
  tamanho: { type: String, required: true },
  valor: { type: Number, required:true },
  cor: { type: String, required: true}
}, { versionKey: false });

const roupa = mongoose.model("roupas", roupaSchema);

export default roupa;
