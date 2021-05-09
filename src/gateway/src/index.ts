import { ApolloServer } from 'apollo-server';
import { ApolloGateway } from '@apollo/gateway';

const PORT = process.env.PORT || 6969;
let gatewayConfig = {};

if (process.env.NODE_ENV !== 'production') {
  gatewayConfig = {
    serviceList: [
      { name: 'company', url: 'http://localhost:4001' },
      { name: 'roadster', url: 'http://localhost:4002' }
    ]
  };
}

const gateway = new ApolloGateway(gatewayConfig);

const server = new ApolloServer({
  gateway,
  subscriptions: false,
  tracing: true,
  introspection: true,
  engine: {
    apiKey: process.env.APOLLO_KEY
  }
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Gateway ready at url: ${url}`);
});
