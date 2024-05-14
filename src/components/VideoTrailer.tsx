import { Spinner } from "@chakra-ui/react";
import useVideoTrailer from "../hooks/useVideoTrailer";

interface Props {
  gameId: number;
}

const VideoTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useVideoTrailer(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default VideoTrailer;
