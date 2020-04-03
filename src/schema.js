const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Query {
        allCountrySummaries: [CountrySummary]
        countrySummaries(countries: [String]): [CountrySummary]
    }

    type CountrySummary {
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

module.exports = typeDefs;
