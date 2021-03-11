import BuscarCepService from './BuscarCepService';
import FakeCepRepository from '../fakes/FakeCepRepository';

describe('BuscarCepService', () => {
  it('Criando um novo cep no banco', () => {
    const fakeCepRepository = new FakeCepRepository();
    const buscarCepService = new BuscarCepService();

    buscarCepService.execute({
      cep: '52120580',
    });
  });

  // it('não permitir cep no banco duplicado', () =>{
  //   expect(1 + 2).toBe(3);
  // });
});
