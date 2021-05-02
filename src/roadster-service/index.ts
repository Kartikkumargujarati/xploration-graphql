import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { RoadsterDataSource } from './dataSource';

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

server.listen({ port: 4002 }).then(({ url }) => {
  console.log(`🚀 Company service ready at ${url}`);
});
