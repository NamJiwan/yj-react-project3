import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { RxEnter } from "react-icons/rx";

export default function TitleImageSkew({ title, description, imgUrl }) {
  return (
    <HStack w="full" h="400px" bg="gray.800" position="relative" overflow={"hidden"}>
      {/*1번째 자식 (왼쪽) */}
      <Box w="50%" h="full">
        {/*빈박스 기울어진 */}
        <Box bg="gray.800" w="full" h="full" transform={"rotate(-10deg) scale(1.4) translateY(40px) translateX(-50px)"}></Box>
      </Box>
      {/*2번째 자식 (오른쪽) */}
      <Box w="50%" h="full" bg="blue.100">
        <Image src={imgUrl} alt="Marvel Img1" w="full" h="full" objectFit={"cover"} objectPosition={"center"} />
      </Box>
      {/*3번째 자식 (중앙) */}
      <VStack position={"absolute"} top="0" left={0} w="full" h="full" alignItems="center">
        <VStack w="7xl" h="full" alignItems={"flex-start"} justifyContent={"center"}>
          <Text color={"white"} fontWeight={700} fontSize={"32px"} textTransform={"uppercase"}>
            {title}
          </Text>
          <Text color={"white"} w="2xl">
            {description}
          </Text>
          <Button mt="6" textTransform={"uppercase"} variant="outline" colorScheme="red" area-aria-label="Comics Button" rightIcon={<RxEnter />}>
            List more
          </Button>
        </VStack>
      </VStack>
    </HStack>
  );
}
