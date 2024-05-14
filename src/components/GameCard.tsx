import {
  Card,
  CardBody,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";
import Game from "../entities/Game";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const navigate = useNavigate();

  return (
    <Card
      as={motion.button}
      whileHover={{ scale: 1.1 }}
      onClick={() => navigate("/games/" + game.slug)}
    >
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Flex justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={
              game.parent_platforms &&
              game.parent_platforms.map((platform) => platform.platform)
            }
          ></PlatformIconList>
          <CriticScore score={game.metacritic!} />
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
