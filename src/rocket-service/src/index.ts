import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer, gql } from 'apollo-server';
import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';
import { RocketDataSource } from './dataSource';

const PORT = process.env.PORT || 4004;

const schema = buildFederatedSchema([{ typeDefs, resolvers }]);

const datasources = () => {
    return {
        rocketAPI: new RocketDataSource()
    };
};

const server = new ApolloServer({
    schema: schema,
    dataSources: datasources,
    tracing: true,
    introspection: process.env.NODE_ENV !== 'production'
});

server.listen({ port: PORT }).then(({ url }) => {
    console.log(`🚀 Rocket service ready at ${url}`);
});
