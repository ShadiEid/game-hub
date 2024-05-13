import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genres from "../components/genres";
import APIClient from "../services/api-client";
import { Game } from "./useGames";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: Game[];
}

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
