module.exports = {
    Query: {
        allCountrySummaries: async (_, __, { dataSources }) => {
            return dataSources.Covid19API.getAllSummaries()["summaries"];
        },
        getCountrySummary: async (_, { country }, { dataSources }) => {
            return dataSources.Covid19API.getSummaryByCountries({
                countries: [country]
            });
        },
        getCountrySummaries: async (_, { countries }, { dataSources }) => {
            return dataSources.Covid19API.getSummaryByCountries({ countries });
        },
        globalSummary: async (_, __, { dataSources }) => {
            return dataSources.Covid19API.getWorldwideSummary();
        }
    }
    // Summary: {
    //     Country: parent => {
    //         console.log(parent);
    //         return parent.Country;
    //     },
    //     CountrySlug: parent => {
    //         return parent.CountrySlug;
    //     },
    //     NewConfirmed: parent => {
    //         return parent.NewConfirmed;
    //     },
    //     TotalConfirmed: parent => {
    //         return parent.TotalConfirmed;
    //     },
    //     NewDeaths: parent => {
    //         return parent.NewDeaths;
    //     },
    //     TotalDeaths: parent => {
    //         return parent.TotalDeaths;
    //     },
    //     NewRecovered: parent => {
    //         return parent.NewRecovered;
    //     },
    //     TotalRecovered: parent => {
    //         return parent.TotalRecovered;
    //     }
    // }
};
