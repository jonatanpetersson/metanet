import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { graphqlHTTP } from 'express-graphql';
import { parcelSchema } from './graphql/schema/index.js';
import resolvers from './graphql/resolvers/index.js';
import { isAuthorized } from './middleware/auth.js';
import cors from 'cors';

const corsOptions = { exposedHeaders: '*' };

dotenv.config();
const app = express();
const port = process.env.PORT;
const connectionString = process.env.CONNECTION_STRING;

app.use(express.json());
app.use(cors(corsOptions));
app.use(isAuthorized);
app.use(
  '/graphql',
  graphqlHTTP({
    schema: parcelSchema,
    rootValue: { ...resolvers },
    graphiql: true,
  }),
);

(async () => {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to db');
    app.listen(port, () => console.log('Server up'));
  } catch (err) {
    console.log(err.message);
  }
})();