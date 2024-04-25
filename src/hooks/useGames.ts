import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchResponse } from "../services/api-client";
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
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", { genre, platform, sortOrder, searchText }],
    queryFn: () => {
      return apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: genre?.id,
            parent_platforms: platform?.id,
            ordering: sortOrder,
            search: searchText,
          },
        })
        .then((res) => res.data);
    },
  });

export default useGames;
