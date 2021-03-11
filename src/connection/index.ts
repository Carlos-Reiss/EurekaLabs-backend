import mongoose from 'mongoose';

export default (db: string | undefined) => {
  if (!db) {
    console.log('Error de conexão com banco de dados, caminho inválido');
    return process.exit(1);
  }

  const connect = () => {
    mongoose
      .connect(db, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      })
      .then(() => {
        return console.log(`Conexão com Banco de dados concluída. \n ${db}`);
      })
      .catch(error => {
        console.log('Error de conexão com banco de dados', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
