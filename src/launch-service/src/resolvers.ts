import { getLaunch } from './reducer';

const resolvers = {
  Query: {
    nextLaunch: async (_source: any, _: any, { dataSources }: any) => {
      const nextLaunch = await dataSources.launchAPI.getNextLaunch();
      return getLaunch(nextLaunch);
    }
  }
};

export { resolvers };
