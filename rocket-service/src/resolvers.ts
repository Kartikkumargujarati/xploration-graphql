import { RocketDto } from './dto';
import { getRocket } from './reducer';

const resolvers = {
    Query: {
        rocket: async (_source: any, args: any, { dataSources }: any) => {
            const rocket = await dataSources.rocketAPI.getRocketById(args.rocketId);
            return getRocket(rocket);
        }
    },
    Rocket: {
        async __resolveReference(rocketDto: RocketDto, { dataSources }: any) {
            const rocket = await dataSources.rocketAPI.getRocketById(rocketDto.id);
            return getRocket(rocket);
        }
    }
};

export { resolvers };
