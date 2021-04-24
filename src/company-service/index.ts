import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer } from 'apollo-server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { CompanyDataSource } from './dataSource';

const schema = buildFederatedSchema([{ typeDefs, resolvers }]);

const datasources = () => {
  return {
    companyAPI: new CompanyDataSource()
  };
};

const server = new ApolloServer({
  schema: schema,
  dataSources: datasources,
  tracing: true
});

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀 Company service ready at ${url}`);
});
