export default function limparCep(cep: string): string {
  const regex = /\D/g; // regex pega somente os digitos

  const ceplimpo = cep.replace(regex, '');

  return ceplimpo;
}
