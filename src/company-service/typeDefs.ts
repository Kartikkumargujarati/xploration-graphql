import { gql } from 'apollo-server';

const typeDefs = gql`
  # This is the Company type that defines all the fields that describes a company
  type Company {
    # Company Name
    name: String!
    founder: String!
    founded: Int!
    ceo: String!
    summary: String!
    headquarters: Location
    links: Links
  }

  type Location {
    address: String!
    city: String!
    state: String!
  }

  type Links {
    website: String!
    twitter: String!
  }

  extend type Query {
    # Returns details about the company
    company: Company
  }
`;

export { typeDefs };
