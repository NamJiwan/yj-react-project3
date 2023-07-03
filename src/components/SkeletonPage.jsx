import { Grid, Skeleton } from "@chakra-ui/react";

export default function SkeletonPage({ num, width = "180px", height = "240px", column }) {
  return (
    <>
      <Grid w="full" px="2" gap="6" templateColumns={`repeat(${column},1fr)`}>
        {Array(Number(num))
          .fill("")
          .map((_, idx) => (
            <Skeleton key={idx} w={width} h={height} />
          ))}
      </Grid>
    </>
  );
}
