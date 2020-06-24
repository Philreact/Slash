import { Song } from "../types/search";
import { SearchActionTypes } from "../types/actions";

const initialState: Song[] = [];
export default function (
  state = initialState,
  action: SearchActionTypes
): Song[] {
  switch (action.type) {
    case "GET_SONGS":
      return action.songs;
    default:
      return state;
  }
}
