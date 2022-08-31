import { Identificators } from "../Identificators";

export default class ErrorContext {
  public identificator = Identificators.TitleContext;
  private _error: string = "";

  public get error(): string {
    return this._error;
  }

  public set error(error: string) {
    this._error = error;
  }
}