import { envConfig } from "../../env-config";
import { axiosInstance } from "../axiosInstance";

export class ImdbApiClient {
  public async getTitleId(title: string): Promise<number> {
    console.log("Getting id for title:", title);
    const response = await axiosInstance({
      method: "GET",
      url: `${envConfig.imdb.titleBaseUrl}/${envConfig.imdb.apiKey}/${title}`
    });
    return response.data.results[0].id;
  }

  public async getRatingForTitleId(id: number): Promise<number> {
    console.log("Getting rating for title id:", id);
    const response = await axiosInstance({
      method: "GET",
      url: `${envConfig.imdb.ratingBaseUrl}/${envConfig.imdb.apiKey}/${id}`
    });
    return response.data.imDb;
  }
}