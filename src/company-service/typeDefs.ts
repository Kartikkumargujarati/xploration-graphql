import { gql } from 'apollo-server';

const typeDefs = gql`
  "This is the Company type that defines all the fields that describes a company"
  type Company {
    "Company Name"
    name: String!

    "Company founder name"
    founder: String!

    "Company founded year"
    founded: Int!

    "Company CEO name"
    ceo: String!

    "Company summary"
    summary: String!

    "Company headquarters location"
    headquarters: Location

    "Company website & social links"
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
    "Returns details about the company"
    company: Company
  }
`;

export { typeDefs };
