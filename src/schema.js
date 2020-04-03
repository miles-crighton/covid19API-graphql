const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Query {
        allCountrySummaries: [CountrySummary]
        countrySummaries(countries: [String]): [CountrySummary]
        globalSummary: Summary
    }

    type CountrySummary {
        Country: String
        NewConfirmed: Int
        TotalConfirmed: Int
        NewDeaths: Int
        TotalDeaths: Int
        NewRecovered: Int
        TotalRecovered: Int
    }

    type Summary {
        NewConfirmed: Int
        TotalConfirmed: Int
        NewDeaths: Int
        TotalDeaths: Int
        NewRecovered: Int
        TotalRecovered: Int
    }

    # extent type Summary {
    #     Country: String
    # }
`;

module.exports = typeDefs;
