import { getRoaster } from './reducer';

const resolvers = {
    Query: {
        roadster: async (_source: any, _: any, { dataSources }: any) => {
            const roadsterInfo = await dataSources.roadsterAPI.getRoadsterInfo();
            return getRoaster(roadsterInfo);
        }
    }
};

export { resolvers };
