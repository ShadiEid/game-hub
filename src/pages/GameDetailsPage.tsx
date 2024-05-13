import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpnadableText from "../components/ExpnadableText";
import useGame from "../hooks/useGame";

const GameDetailsPage = () => {
  //   throw new Error();

  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <div>
      <Heading>{game.name}</Heading>
      <ExpnadableText>{game.description_raw!}</ExpnadableText>
    </div>
  );
};

export default GameDetailsPage;
