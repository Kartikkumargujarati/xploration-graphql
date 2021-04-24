import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }])
});

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀 Company service ready at ${url}`);
});
