import { typeDefs } from './typeDefs';
import { print } from 'graphql';
import { writeFileSync } from 'fs';

(async () => {
    const sdl = print(typeDefs);
    writeFileSync('schema.graphql', sdl);
})();
