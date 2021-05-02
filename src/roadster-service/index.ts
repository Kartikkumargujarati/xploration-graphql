import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { RoadsterDataSource } from './dataSource';

const PORT = process.env.PORT || 4002;

const schema = buildFederatedSchema([{ typeDefs, resolvers }]);

const datasources = () => {
  return {
    roadsterAPI: new RoadsterDataSource()
  };
};

const server = new ApolloServer({
  schema: schema,
  dataSources: datasources,
  tracing: true
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Company service ready at ${url}`);
});
