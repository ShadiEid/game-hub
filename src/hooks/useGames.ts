import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = ({ genre, platform, sortOrder, searchText }: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: genre?.id,
        parent_platforms: platform?.id,
        ordering: sortOrder,
        search: searchText,
      },
    },
    [genre, platform, sortOrder, searchText]
  );

export default useGames;
