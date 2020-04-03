module.exports = {
    Query: {
        allCountrySummaries: async (_, __, { dataSources }) => {
            return dataSources.Covid19API.getAllSummaries()["summaries"];
        },
        countrySummary: async (_, { country }, { dataSources }) => {
            return dataSources.Covid19API.getSummaryByCountries({
                countries: [country]
            });
        },
        countrySummaries: async (_, { countries }, { dataSources }) => {
            return dataSources.Covid19API.getSummaryByCountries({ countries });
        },
        globalSummary: async (_, __, { dataSources }) => {
            return dataSources.Covid19API.getWorldwideSummary();
        },
        countriesAndProvinces: async (_, __, { dataSources }) => {
            return dataSources.Covid19API.getCountries();
        },
        countryNames: async (_, __, { dataSources }) => {
            return dataSources.Covid19API.getCountryNames();
        }
    }
};
