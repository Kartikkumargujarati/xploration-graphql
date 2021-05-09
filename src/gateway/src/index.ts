import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const PORT = process.env.PORT || 6969;

const gateway = new ApolloGateway();

const server = new ApolloServer({
  gateway,
  subscriptions: false,
  tracing: true,
  introspection: true,
  engine: {
    apiKey: process.env.APOLLO_KEY
  }
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Gateway ready at url: ${url}`);
});
