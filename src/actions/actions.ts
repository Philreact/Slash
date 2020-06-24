import axios from "axios";
import { Dispatch } from "redux";

import { AppActions } from "../types/actions";
import { Song } from "../types/search";
import { AppState } from "../store";

export const searchSongs = (songs: Song[]): AppActions => ({
  type: "GET_SONGS",
  songs,
});

export const addFavourite = (song: Song): AppActions => ({
  type: "ADD_FAVOURITE",
  song,
});
export const removeFavourite = (song: Song): AppActions => ({
  type: "REMOVE_FAVOURITE",
  song,
});
export const loading = (loading: boolean): AppActions => ({
  type: "LOADING",
  loading,
});

export const searchSongsFunc = (artist: string) => async (
  dispatch: Dispatch<AppActions>,
  getState: AppState
) => {
  try {
    dispatch(loading(true));
    const res = await axios.get(
      `https://itunes.apple.com/search?term=${artist}&entity=song`
    );

    dispatch(loading(false));

    return dispatch(searchSongs(res.data.results));
  } catch (err) {
    dispatch(loading(false));

    const errors = err.response.data.errors;
  }
};
