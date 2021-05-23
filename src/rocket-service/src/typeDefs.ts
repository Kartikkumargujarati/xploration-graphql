import { gql } from 'apollo-server';

const typeDefs = gql`
    # This is a Rocket type
    type Rocket {
        # Rocket id
        id: String!

        # Rocket company name
        company: String

        # Rocket country name
        country: String

        # Rocket name
        name: String

        # Rocket Description
        description: String

        # Rocket images
        images: [String]
    }

    extend type Query {
        # Returns details about a Rocket used in a launch
        rocket(rocketId: String!): Rocket
    }
`;

export { typeDefs };
