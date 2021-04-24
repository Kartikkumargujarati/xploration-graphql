import { gql } from 'apollo-server';

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

export { typeDefs };
