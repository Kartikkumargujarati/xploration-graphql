const resolvers = {
    Query: {
        company: async (_source: any, _: any, { dataSources }: any) => {
            return await dataSources.companyAPI.getCompanyInfo();
        }
    }
};

export { resolvers };
