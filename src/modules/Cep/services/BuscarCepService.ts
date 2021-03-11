import Cep, { CepInterface } from '../entities/Cep';

import api from '../../../services/api';
import limparCep from '../../../utils/LimparCep';
import ServerError from '../../../errors';

type RequestTypes = {
  cep: string;
};

class BuscarCepService {
  public async execute({ cep }: RequestTypes): Promise<CepInterface> {
    const cepSomenteDigitos = limparCep(cep);

    if (cepSomenteDigitos.length !== 8 || !cepSomenteDigitos) {
      throw new ServerError('Error Cep informado não é valido', 404);
    }

    const findCep = await Cep.findOne({ cep: cepSomenteDigitos });

    if (!findCep) {
      const response = await (await api.get<CepInterface>(`/${cep}/json`)).data;

      const {
        cep: cepRetornado,
        logradouro,
        bairro,
        localidade,
        uf,
        erro,
      } = response;

      if (erro === true) {
        throw new ServerError('Error Cep informado não é valido.', 404);
      }

      const cepLimpo = limparCep(cepRetornado);

      const meuCep = {
        cep: cepLimpo,
        bairro,
        localidade,
        logradouro,
        uf,
      } as CepInterface;

      const cepCreateMongo = await Cep.create(meuCep);

      return cepCreateMongo;
    }

    return findCep;
  }
}

export default BuscarCepService;
