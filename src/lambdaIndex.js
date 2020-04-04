const { ApolloServer } = require("apollo-server-lambda");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const Covid19API = require("./datasources/covid19");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        Covid19API: new Covid19API()
    }),
    playground: {
        endpoint: "/dev/graphql"
    }
});

exports.graphqlHandler = server.createHandler();
