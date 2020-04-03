const { RESTDataSource } = require("apollo-datasource-rest");

class Covid19API extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.covid19api.com/";
    }

    async getAllSummaries() {
        const response = await this.get("summary");
        let summaryData = response.Countries;
        summaryData = Array.isArray(summaryData)
            ? summaryData.map(summary => this.summaryReducer(summary))
            : [];
        return { summaries: summaryData, date: response.Date };
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
        console.log(countries);
        let { summaries } = await this.getAllSummaries();
        return summaries.filter(countrySummary => {
            return countries.includes(countrySummary.Country);
        });
    }

    async getWorldwideSummary() {
        let { summaries, date } = await this.getAllSummaries();
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

        const reducedSummary = summaries.reduce((result, summary) => {
            summaryKeys.forEach(key => {
                if (key in summary) {
                    result[key] += summary[key];
                }
            });
            return result;
        }, initialGlobalSummary);

        reducedSummary["LastUpdated"] = date;

        return reducedSummary;
    }
}

module.exports = Covid19API;
