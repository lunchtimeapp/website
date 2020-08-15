import { connect } from 'mongoose';

export async function connectDb(uri: string) {

  await connect(uri, { useNewUrlParser: true });

  // const connect = () => {
  //   mongoose
  //     .connect(
  //       db,
  //       { useNewUrlParser: true }
  //     )
  //     .then(() => {
  //       return console.info(`Successfully connected to ${db}`);
  //     })
  //     .catch(error => {
  //       console.error('Error connecting to database: ', error);
  //       return process.exit(1);
  //     });
  // };
  // connect();

  // Reconnect
  // mongoose.connection.on('disconnected', connect);
};
