const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Query {
        summaries: [Summary]
        summaryForCountries(countries: [String]): [Summary]
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

module.exports = typeDefs;
