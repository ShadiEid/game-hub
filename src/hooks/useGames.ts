import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";

import APIClient, { FetchResponse } from "../services/api-client";
import { GameQuery } from "../store";
import Game from "../entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGames = ({ genreId, platformId, sortOrder, searchText }: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", { genreId, platformId, sortOrder, searchText }],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: genreId,
          parent_platforms: platformId,
          ordering: sortOrder,
          search: searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.next ? pages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });

export default useGames;
