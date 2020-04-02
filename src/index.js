const express = require("express");
const axios = require("axios");
const { ApolloServer, gql } = require("apollo-server-express");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type Query {
        summary(countries: [String]): [Summary]
    }

    type Summary {
        Country: String
        CountrySlug: String
        NewConfirmed: Int
        TotalConfirmed: Int
        NewDeaths: Int
        TotalDeaths: Int
        NewRecovered: Int
        TotalRecovered: Int
    }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Summary: {
        Country: parent => {
            return parent.Country;
        },
        CountrySlug: parent => {
            return parent.Slug;
        },
        NewConfirmed: parent => {
            return parent.NewConfirmed;
        },
        TotalConfirmed: parent => {
            return parent.TotalConfirmed;
        },
        NewDeaths: parent => {
            return parent.NewDeaths;
        },
        TotalDeaths: parent => {
            return parent.TotalDeaths;
        },
        NewRecovered: parent => {
            return parent.TotalRecovered;
        },
        TotalRecovered: parent => {
            return parent.TotalRecovered;
        }
    },
    Query: {
        summary: async (_, { countries }) => {
            const res = await axios.get(
                "https://api.covid19api.com/summary",
                {}
            );
            console.log(countries);
            let countryData = res.data.Countries;
            countryData = countryData.filter(countrySummary => {
                return countries.includes(countrySummary.Country);
            });
            return countryData;
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
