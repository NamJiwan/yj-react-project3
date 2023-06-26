import { HStack, Skeleton } from "@chakra-ui/react";

export default function SkeletonList(props) {
  const listNum = props.limit;
  console.log(listNum);

  return (
    <HStack spacing={2}>
      {Array(listNum)
        .fill("")
        .map((_, i) => (
          <Skeleton key={i} width="170px" height={"240px"} />
        ))}
    </HStack>
  );
}
