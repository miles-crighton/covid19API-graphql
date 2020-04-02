const express = require("express");
const axios = require("axios");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const Covid19API = require("./datasources/covid19");

// const resolvers = {
//     Summary: {
//         Country: parent => {
//             return parent.Country;
//         },
//         CountrySlug: parent => {
//             return parent.Slug;
//         },
//         NewConfirmed: parent => {
//             return parent.NewConfirmed;
//         },
//         TotalConfirmed: parent => {
//             return parent.TotalConfirmed;
//         },
//         NewDeaths: parent => {
//             return parent.NewDeaths;
//         },
//         TotalDeaths: parent => {
//             return parent.TotalDeaths;
//         },
//         NewRecovered: parent => {
//             return parent.TotalRecovered;
//         },
//         TotalRecovered: parent => {
//             return parent.TotalRecovered;
//         }
//     },
//     Query: {
//         summary: async (_, { countries }) => {
//             const res = await axios.get(
//                 "https://api.covid19api.com/summary",
//                 {}
//             );
//             let countryData = res.data.Countries;
//             countryData = countryData.filter(countrySummary => {
//                 return countries.includes(countrySummary.Country);
//             });
//             return countryData;
//         }
//     }
// };

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({
        Covid19API: new Covid19API()
    })
});

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
