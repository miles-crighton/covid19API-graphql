const { RESTDataSource } = require("apollo-datasource-rest");

class Covid19API extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.covid19api.com/";
    }

    async getAllSummaries() {
        const response = await this.get("summary");
        const summaryData = response.Countries;
        return Array.isArray(summaryData)
            ? summaryData.map(summary => this.summaryReducer(summary))
            : [];
    }

    summaryReducer(summary) {
        return {
            Country: summary.Country,
            CountrySlug: summary.Slug,
            NewConfirmed: summary.NewConfirmed,
            TotalConfirmed: summary.TotalConfirmed,
            NewDeaths: summary.NewDeaths,
            TotalDeaths: summary.TotalDeaths,
            NewRecovered: summary.NewRecovered,
            TotalRecovered: summary.TotalRecovered
        };
    }

    async getSummaryByCountries({ countries }) {
        let allSummaries = await this.getAllSummaries();
        return allSummaries.filter(countrySummary => {
            return countries.includes(countrySummary.Country);
        });
    }
}

module.exports = Covid19API;
