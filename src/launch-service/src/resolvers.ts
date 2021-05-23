import { LaunchDto } from './dto';
import { getLaunch, getPastLaunches } from './reducer';

const resolvers = {
    Query: {
        nextLaunch: async (_source: any, _: any, { dataSources }: any) => {
            const nextLaunch = await dataSources.launchAPI.getNextLaunch();
            return getLaunch(nextLaunch);
        },

        pastLaunches: async (_source: any, _: any, { dataSources }: any) => {
            const pastLaunches = await dataSources.launchAPI.getPastLaunches();
            return getPastLaunches(pastLaunches);
        }
    }
};

export { resolvers };
