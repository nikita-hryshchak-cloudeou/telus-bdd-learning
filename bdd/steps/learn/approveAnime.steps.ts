import { featureContext, postgresQueryExecutor } from "@cloudeou/telus-bdd";
import { ImdbApiClient } from "../../../bdd-src/learn/imdbApi/imdbApiIntegration";
import { Identificators } from "../../contexts/Identificators";
import { setApproved } from "../../../bdd-src/db/queries";
import ErrorContext from "../../contexts/learn/ErrorContext";
import TitleContext from "../../contexts/learn/TitleContext";

export const approveAnimeSteps = ({ given, when, then, and }: { [key: string]: any }) => {
  const errorContext = (): ErrorContext => featureContext().getContextById(Identificators.ErrorContext);
  const titleContext = (): TitleContext => featureContext().getContextById(Identificators.TitleContext);
  const imdbApiClient = new ImdbApiClient();

  given(/^users title id is (.*)$/, (paramValue: number) => {
    console.log(`Setting title id to ${paramValue}`);
    titleContext().userTitleId = paramValue;
  });

  and(/^users title name is (.*)$/, (paramValue: string) => {
    console.log(`Setting title name to ${paramValue}`);
    titleContext().name = paramValue;
  });

  and(/^users title rating is (.*)$/, (paramValue: number) => {
    console.log(`Setting title rating to ${paramValue}`);
    titleContext().userRating = paramValue;
  });

  when("get imdb title id", async () => {
    try {
      // const context = titleContext();
      // context.imdbTitleId = await imdbApiClient.getTitleId(context.name);
      // for parallel processing the soluthion above is going to work as well, right?
      titleContext().imdbTitleId = await imdbApiClient.getTitleId(titleContext().name);
    } catch (error) {
      errorContext().error = <string>error;
    }
  });

  and("get imdb rating for title id", async () => {
    try {
      // const context = titleContext();
      // context.imdbRating = await imdbApiClient.getRatingForTitleId(context.imdbTitleId);
      // for parallel processing the soluthion above is going to work as well, right?
      titleContext().imdbRating = await imdbApiClient.getRatingForTitleId(titleContext().imdbTitleId);
    } catch (error) {
      errorContext().error = <string>error;
    }
  });

  then("compare users title rating with imdb title rating", async () => {
    try {
      const dif = Math.abs(titleContext().imdbRating - titleContext().userRating);
      const id = titleContext().userTitleId;
      const query = dif < 3 ? setApproved(id, true) : setApproved(id, false);
      await postgresQueryExecutor(query);
    } catch (error) {
      errorContext().error = <string>error;
    }
  });
};