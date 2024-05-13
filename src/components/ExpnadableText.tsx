import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpnadableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = children.substring(0, 300) + "...";

  return (
    <Text>
      {expanded ? children : summary}
      <Button
        size={"xs"}
        fontWeight={"bold"}
        colorScheme={"yellow"}
        onClick={() => setExpanded(!expanded)}
        mx={2}
      >
        {expanded ? "Show Less" : "Load More"}
      </Button>
    </Text>
  );
};

export default ExpnadableText;
