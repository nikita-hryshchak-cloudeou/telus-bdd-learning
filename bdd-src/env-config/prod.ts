export const envConfig = {
  envName: "prod",
  imdb: {
    titleBaseUrl: "https://imdb-api.com/en/API/SearchSeries/",
    ratingBaseUrl: "https://imdb-api.com/en/API/Ratings",
    apiKey: process.env.API_KEY
  }
};