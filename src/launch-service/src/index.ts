import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  # This is a Launch type that defines all the fields that describes a SpaceX Launch
  type Launch {
    # Launch id
    id: String!
  }

  extend type Query {
    # Returns details about the latest launch
    latestLaunch: Launch
  }
`;

const latestLaunch = { id: '1234' };

const resolvers = {
  Query: {
    latestLaunch: () => latestLaunch
  }
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }])
});

server.listen({ port: 4002 }).then(({ url }) => {
  console.log(`🚀 Launch service ready at ${url}`);
});
