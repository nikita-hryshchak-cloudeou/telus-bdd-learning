import { featureContext, postgresQueryExecutor } from "@cloudeou/telus-bdd";
import { Identificators } from "../../contexts/Identificators";
import { finishProcessing } from "../../../bdd-src/db/queries";
import ErrorContext from "../../contexts/learn/ErrorContext";
import TitleContext from "../../contexts/learn/TitleContext";

export const finishAutomation = ({ when }: {[key: string]: any}) => {
  const errorContext = (): ErrorContext => featureContext().getContextById(Identificators.ErrorContext);
  const titleContext = (): TitleContext => featureContext().getContextById(Identificators.TitleContext);
  when("set meta flags in db", async () => {
    try {
      const id = titleContext().userTitleId;
      await postgresQueryExecutor(finishProcessing(id, ""));
    } catch (error) {
      errorContext().error = <string>error;
    }
  });

  when("reset titles", () => {
    console.log("titles have been reseted");
  });
};