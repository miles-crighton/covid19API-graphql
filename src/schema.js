const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
    type Query {
        allCountrySummaries: [CountrySummary]
        countrySummary(country: String): [CountrySummary]
        countrySummaries(countries: [String]): [CountrySummary]
        countriesAndProvinces: [Country]
        countryNames: [String]
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

    type Country {
        Name: String
        Provinces: [String]
    }

    # extent type Summary {
    #     Country: String
    # }
`;

module.exports = typeDefs;
