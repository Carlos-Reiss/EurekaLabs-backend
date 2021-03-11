import Cep, { CepInterface } from '../entities/Cep';

class FakeCepRepository extends Document {
  private ceps: CepInterface[] = [];

  public async create(cep: string): Promise<CepInterface> {
    const objeto = new Cep();

    objeto.cep = cep;

    this.ceps.push(objeto);

    return objeto;
  }

  public async findOne(cep: string): Promise<CepInterface | undefined> {
    const buscarCep = this.ceps.find(objeto => objeto.cep === cep);
    return buscarCep;
  }
}

export default FakeCepRepository;
