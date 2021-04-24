const company = { name: 'SpaceX' };

const resolvers = {
  Query: {
    company: () => company
  }
};
export { resolvers };
