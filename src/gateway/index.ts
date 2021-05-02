import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'company', url: 'http://localhost:4001' },
    { name: 'roadster', url: 'http://localhost:4002' }
  ]
});

const server = new ApolloServer({ gateway, subscriptions: false, tracing: true });

server.listen(6969).then(({ url }) => {
  console.log(`🚀 Gateway ready at url: ${url}`);
});