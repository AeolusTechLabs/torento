import makeExcutableSchema from 'graphql-tools';

import typedefs from "./types";
import resolvers from "./resolvers";

const schema = makeExcutableSchema({
    typedefs,
    resolvers
});
module.exports = schema;