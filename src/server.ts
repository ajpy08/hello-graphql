import express from "express";
import compression from "compression";
import cors from 'cors';
import graphQLHTTP from 'express-graphql';
import schema from './schema'

import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";

const app = express();
app.use('*', cors());
app.use(compression());

const server = new ApolloServer({
    schema,
    introspection: true
});

server.applyMiddleware({app});

const PORT = 5300;
const htppServer = createServer(app);

htppServer.listen(
    {port: PORT},
    () => console.log(`Hola Mundo API GraphQL http://localhost:${PORT}/graphql`)
);