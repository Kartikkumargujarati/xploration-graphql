import { gql } from 'apollo-server';

const typeDefs = gql`
    # This is a Launch type that defines all the fields that describes a SpaceX Launch
    type Launch {
        # Launch id
        id: String!

        # Launch date (UTC)
        date: String

        # Launch name
        name: String

        # Flight number
        flightNumber: Int

        # Launch Details
        details: String

        # Launch Links
        links: LaunchLinks

        # Rocket details
        rocket: Rocket
    }

    type LaunchLinks {
        images: [String]
        patch: String
        reddit: String
        wikipedia: String
        youTube: String
    }

    extend type Rocket @key(fields: "id") {
        id: String! @external
    }

    extend type Query {
        # Returns details about the next launch
        nextLaunch: Launch

        # Returns a list of past launches
        pastLaunches: [Launch]
    }
`;

export { typeDefs };
