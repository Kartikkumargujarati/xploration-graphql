import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { LaunchDataSource } from './dataSource';

const PORT = process.env.PORT || 4002;

const schema = buildFederatedSchema([{ typeDefs, resolvers }]);

const datasources = () => {
  return {
    launchAPI: new LaunchDataSource()
  };
};

const server = new ApolloServer({
  schema: schema,
  dataSources: datasources,
  tracing: true,
  introspection: true
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Launch service ready at ${url}`);
});
