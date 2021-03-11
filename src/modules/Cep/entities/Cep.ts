import mongoose, { Document } from 'mongoose';

export interface CepInterface extends Document {
  cep: string;
  bairro: string;
  logradouro: string;
  localidade: string;
  uf: string;
  erro?: boolean;
}

const Cep = new mongoose.Schema<CepInterface>(
  {
    cep: {
      type: String,
    },
    bairro: {
      type: String,
    },
    logradouro: {
      type: String,
    },
    localidade: {
      type: String,
    },
    uf: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

export default mongoose.model('Cep', Cep);
