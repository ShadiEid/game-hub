import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize={"2xl"} paddingY={3}>
        Geners
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                onClick={() => {
                  setGenreId(genre.id);
                }}
                fontSize={"lg"}
                variant={"link"}
                fontWeight={genre.id === gameQuery.genreId ? "bold" : "normal"}
                whiteSpace={"normal"}
                textAlign={"start"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
