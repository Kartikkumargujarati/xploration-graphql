import { gql } from 'apollo-server';

const typeDefs = gql`
  "This is the Company type that defines all the fields that describes a company"
  type Company {
    "Company CEO name"
    ceo: String!

    "Company founded year"
    founded: Int!

    "Company founder name"
    founder: String!

    "Company headquarters location"
    headquarters: Location

    "Company website & social links"
    links: Links

    "Company Name"
    name: String!

    "Company summary"
    summary: String!
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
