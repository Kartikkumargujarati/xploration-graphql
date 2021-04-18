import { buildFederatedSchema } from '@apollo/federation';
import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  # This is the Company type that defines all the fields that describes a company
  type Company {
    # Company Name
    name: String!
  }

  extend type Query {
    # Returns details about the company
    company: Company
  }
`;

const company = { name: 'SpaceX' };

const resolvers = {
  Query: {
    company: () => company
  }
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }])
});

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀  Company service ready at ${url}`);
});
