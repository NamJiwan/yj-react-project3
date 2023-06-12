import { Box, Grid, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaTumblr, FaSnapchatGhost, FaPinterestP } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <HStack w="full" bg="gray.800" h={"300px"} py="20" justifyContent={"center"} alignItems={"flex-start"}>
        <Grid
          w={{
            md: "3xl",
            lg: "5xl",
            xl: "7xl",
          }}
          templateColumns={{
            sm: "1fr",
            xl: "0.5fr 1fr 1fr 1fr",
          }}
          h="full"
          gap="4"
        >
          <GridItem>
            <Box w="36">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" alt="Main logo" w="36" />
            </Box>
          </GridItem>
          <GridItem w="full">
            <HStack w="full" spacing={8}>
              <VStack color={"gray.100"} fontWeight={400} alignItems={"flex-start"}>
                <Text>ABOUT MARVEL</Text>
                <Text>HELP/FAQS</Text>
                <Text>CAREERS</Text>
                <Text>INTERNSHIPS</Text>
              </VStack>
              <VStack color={"gray.400"} alignItems={"flex-start"}>
                <Text>ADVERTISING</Text>
                <Text>DISNEY+</Text>
                <Text>MARVELHQ.COM</Text>
                <Text>REDEEM DIGITAL</Text>
              </VStack>
            </HStack>
          </GridItem>
          <GridItem w="full">
            <VStack spacing={6}>
              <HStack spacing={6}>
                <Box w="16">
                  <Image src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/marvel_insider-topnav-logo-large2x.png" alt="tooter_image" />
                </Box>
                <VStack alignItems={"flex-start"} spacing={0}>
                  <Text fontWeight={400} color={"gray.100"}>
                    MARVEL INSIDER
                  </Text>
                  <Text color={"gray.400"}>Lorem ipsum dolor sit amet.</Text>
                </VStack>
              </HStack>
              <HStack spacing={6}>
                <Box w="16">
                  <Image src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mu-logo-w-nav-2x-2021-02.png" alt="tooter_image" />
                </Box>
                <VStack alignItems={"flex-start"} spacing={0}>
                  <Text fontWeight={400} color={"gray.100"}>
                    MARVEL UNLIMITED
                  </Text>
                  <Text color={"gray.400"}>Lorem ipsum dolor sit amet.</Text>
                </VStack>
              </HStack>
            </VStack>
          </GridItem>
          <GridItem w="full">
            <VStack alignItems={"flex-start"} spacing={5}>
              <Text fontWeight={400} color="gray.100">
                FOLLOW MARVEL
              </Text>
              <Grid color="gray.500" templateColumns={"repeat(4,1fr)"} gap="6" fontSize={20}>
                <GridItem>
                  <Box>
                    <AiFillFacebook />
                  </Box>
                </GridItem>
                <GridItem>
                  <Box>
                    <AiFillTwitterCircle />
                  </Box>
                </GridItem>
                <GridItem>
                  <Box>
                    <AiFillInstagram />
                  </Box>
                </GridItem>
                <GridItem>
                  <Box>
                    <FaTumblr />
                  </Box>
                </GridItem>
                <GridItem>
                  <Box>
                    <AiFillYoutube />
                  </Box>
                </GridItem>
                <GridItem>
                  <Box>
                    <FaSnapchatGhost />
                  </Box>
                </GridItem>
                <GridItem>
                  <Box>
                    <FaPinterestP />
                  </Box>
                </GridItem>
              </Grid>
            </VStack>
          </GridItem>
        </Grid>
      </HStack>
    </>
  );
}
