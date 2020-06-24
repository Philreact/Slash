import { Song } from "./search";

export const GET_SONGS = "GET_SONGS";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const LOADING = "LOADING";

export interface GetSongAction {
  type: typeof GET_SONGS;
  songs: Song[];
}
export interface AddFavouriteAction {
  type: typeof ADD_FAVOURITE;
  song: Song;
}
export interface RemoveFavouriteAction {
  type: typeof REMOVE_FAVOURITE;
  song: Song;
}
export interface Loading {
  type: typeof LOADING;
  loading: boolean;
}

export type SearchActionTypes =
  | GetSongAction
  | AddFavouriteAction
  | RemoveFavouriteAction
  | Loading;

export type AppActions = SearchActionTypes;
