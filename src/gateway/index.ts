import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const PORT = process.env.PORT || 6969;

const gateway = new ApolloGateway({
  serviceList: [
    { name: 'company', url: 'http://localhost:4001' },
    { name: 'roadster', url: 'http://localhost:4002' }
  ]
});

const server = new ApolloServer({ gateway, subscriptions: false, tracing: true });

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Gateway ready at url: ${url}`);
});
