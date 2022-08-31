import { Identificators } from "../Identificators";

export default class TitleContext {
  public identificator = Identificators.TitleContext;
  private _userTitleId: number = NaN;
  private _name: string = "";
  private _userRating: number = NaN;
  private _imdbTitleId: number = NaN;
  private _imdbRating: number = NaN;

  public get userTitleId() {
    return this._userTitleId;
  }

  public set userTitleId(id: number) {
    this._userTitleId = id;
  }

  public get name() {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get userRating() {
    return this._userRating;
  }

  public set userRating(rating: number) {
    this._userRating = rating;
  }

  public get imdbTitleId() {
    return this._imdbTitleId;
  }

  public set imdbTitleId(rating: number) {
    this._imdbTitleId = rating;
  }

  public get imdbRating() {
    return this._imdbRating;
  }

  public set imdbRating(rating: number) {
    this._imdbRating = rating;
  }
}