import { Avatar, Box, Grid, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();

  const { data } = useQuery("comicsDetail", () =>
    fetch(`https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=b56a537aa50593c767e52d7ae0a5a965`).then((res) => res.json())
  );
  //   console.log(isLoading, error, data);

  return (
    <>
      <Box>
        <VStack
          w="full"
          h="650px"
          backgroundImage={`${data?.data?.results[0].thumbnail.path}.${data?.data?.results[0].thumbnail.extension}`}
          backgroundRepeat={"no-repeat"}
          backgroundSize={"cover"}
          backgroundPosition={"center"}
          backdropBlur={"130px"}
          alignItems={"center"}
          position={"relative"}
        >
          {/* 배경이미지 블러효과 */}
          <Box position={"absolute"} top="0" left="0" w="full" h="full" bg="rgba(0,0,0,0.8)" />
          <HStack w="7xl" h="full" zIndex={"999"} alignItems={"center"}>
            <Grid templateColumns={"350px 1fr"} gap={16}>
              <GridItem>
                <Box w="full" h="500px" transform={"translateY(20px)"}>
                  <Image src={`${data?.data?.results[0].thumbnail.path}.${data?.data?.results[0].thumbnail.extension}`} alt="Detail_Image" />
                </Box>
              </GridItem>
              <GridItem>
                <VStack h="full" justifyContent={"flex-start"} alignItems={"flex-start"} spacing={8} py="16">
                  <Text color={"white"} fontWeight={600} fontSize={"xl"}>
                    {data?.data?.results[0].title}
                  </Text>
                  <Text color="gray.200" font="lg">
                    {data?.data?.results[0].variantDescription}
                  </Text>
                  <VStack alignItems={"flex-start"}>
                    <Text color={"white"} fontWeight={600} fontSize={"xl"}>
                      Creator
                    </Text>
                    <HStack w="full" justifyContent={"flex-start"}>
                      {data?.data?.results[0]?.creators?.items?.map((item, i) => (
                        <VStack>
                          <Avatar name={item.name} src={item.resourceURI} />
                          console.log(item.resourceURI)
                          <Text key={i} color={"white"}>
                            {item.name}
                          </Text>
                        </VStack>
                      ))}
                    </HStack>
                  </VStack>
                </VStack>
              </GridItem>
            </Grid>
          </HStack>
        </VStack>
      </Box>
    </>
  );
}
