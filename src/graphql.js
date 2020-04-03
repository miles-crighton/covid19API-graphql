const express = require("express");
const axios = require("axios");
const { ApolloServer, gql } = require("apollo-server-lambda");
const { makeExecutableSchema } = require("graphql-tools");

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const Covid19API = require("./datasources/covid19");

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        Covid19API: new Covid19API()
    })
});

exports.graphqlHandler = server.createHandler();

// const app = express();
// server.applyMiddleware({ app });

// app.listen({ port: 4000 }, () =>
//     console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// );