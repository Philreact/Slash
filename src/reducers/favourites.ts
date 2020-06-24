import { Song } from "../types/search";
import { SearchActionTypes } from "../types/actions";

const initialState: any = [];
export default function (
  state = initialState,
  action: SearchActionTypes
): Song[] {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return [...state, action.song];
    case "REMOVE_FAVOURITE":
      const filter = state.filter(
        (favorite: Song) => favorite.trackId !== action.song.trackId
      );

      return [...filter];

    default:
      return state;
  }
}
