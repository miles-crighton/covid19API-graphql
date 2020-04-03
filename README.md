# GraphQL wrapper for Covid19 REST API

The Covid19 public API: [https://covid19api.com/#details](https://covid19api.com/#details)

This is currently only for learning purposes.

Example query:

```javascript
{
  summaryForCountries(countries: ["United Kingdom", "Austria"]) {
    Country
    TotalRecovered
  }
}
```

**This is not intended to be used as a source of official information regarding the SARS-CoV-2 pandemic.**

There are plenty of quality resources currently available to monitor the outbreak. Here are a few:

-   [https://google.com/covid19-map/?hl=en](https://google.com/covid19-map/?hl=en)
-   [https://coronavirus.jhu.edu/map.html](https://coronavirus.jhu.edu/map.html)
