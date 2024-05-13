import { Heading } from "@chakra-ui/react";
import useGener from "../hooks/useGener";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const { genreId, platformId } = useGameQueryStore(
    (selector) => selector.gameQuery
  );

  const genre = useGener(genreId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as={"h1"} marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
