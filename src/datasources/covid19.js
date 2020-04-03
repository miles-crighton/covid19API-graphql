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

    async getWorldwideSummary() {
        let allSummaries = await this.getAllSummaries();
        const summaryKeys = [
            "NewConfirmed",
            "TotalConfirmed",
            "NewDeaths",
            "TotalDeaths",
            "NewRecovered",
            "TotalRecovered"
        ];

        //Generate an initialised summary object
        const initialGlobalSummary = {};
        summaryKeys.forEach(key => (initialGlobalSummary[key] = 0));

        const reducedSummary = allSummaries.reduce((result, summary) => {
            summaryKeys.forEach(key => {
                if (key in summary) {
                    result[key] += summary[key];
                }
            });
            return result;
        }, initialGlobalSummary);

        return reducedSummary;
    }
}

module.exports = Covid19API;
