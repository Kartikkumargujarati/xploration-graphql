import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { CompanyDataSource } from './dataSource';

const PORT = process.env.PORT || 4201;

const schema = buildFederatedSchema([{ typeDefs, resolvers }]);

const datasources = () => {
  return {
    companyAPI: new CompanyDataSource()
  };
};

const server = new ApolloServer({
  schema: schema,
  dataSources: datasources,
  tracing: true,
  introspection: true
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Company service ready at ${url}`);
});
