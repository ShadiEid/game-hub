import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const apiClient = new APIClient<Game>("/games");

const useGames = ({ genre, platform, sortOrder, searchText }: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", { genre, platform, sortOrder, searchText }],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: genre?.id,
          parent_platforms: platform?.id,
          ordering: sortOrder,
          search: searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.next ? pages.length + 1 : undefined;
    },
  });

export default useGames;
