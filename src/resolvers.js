module.exports = {
    Query: {
        summaries: async (_, __, { dataSources }) => {
            return dataSources.Covid19API.getAllSummaries();
        },
        summaryForCountries: async (_, { countries }, { dataSources }) => {
            return dataSources.Covid19API.getSummaryByCountries({ countries });
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
