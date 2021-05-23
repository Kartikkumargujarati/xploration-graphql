import { gql } from 'apollo-server';

const typeDefs = gql`
    "A type for Tesla Roadster that was launched into the space"
    type Roadster {
        "Details about the Roadster launch"
        details: String!

        "Distance from Earth (in Miles)"
        earthDistance: Float

        "Roadster launch date (in UTC)"
        launchDate: String

        "Web links related to Roadster"
        links: RoadsterLinks

        "Distance from Mars (in Miles)"
        marsDistance: Float

        "Vehicle Name"
        name: String!

        "Current speed (in MPH)"
        speed: Float
    }

    type RoadsterLinks {
        images: [String]
        wikipedia: String
        youTube: String
    }

    extend type Query {
        "Returns details about the Tesla Roaster that was launched into the space"
        roadster: Roadster
    }
`;

export { typeDefs };
