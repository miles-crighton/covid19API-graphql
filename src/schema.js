const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Query {
        allCountrySummaries: [CountrySummary]
        getCountrySummary(country: String): [CountrySummary]
        getCountrySummaries(countries: [String]): [CountrySummary]
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
        LastUpdated: String
    }

    # extent type Summary {
    #     Country: String
    # }
`;

module.exports = typeDefs;
