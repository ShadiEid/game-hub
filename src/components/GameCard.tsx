import {
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Flex justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          ></PlatformIconList>
          <CriticScore score={game.metacritic} />
        </Flex>
        <Heading fontSize="2xl">
          <HStack justifyContent={"space-between"}>
            <Text>{game.name}</Text>
            <Emoji rating={game.rating_top} />
          </HStack>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
