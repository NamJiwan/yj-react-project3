import { Box, Grid, GridItem, HStack, Image, Select, Text, VStack } from "@chakra-ui/react";

export default function Characters() {
  return (
    <>
      <VStack w="full">
        <Box w="full" h="64px" overflow={"hidden"}>
          <Image
            w="full"
            h="full"
            objectFit={"cover"}
            src="https://images.unsplash.com/photo-1610296669228-602fa827fc1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80"
            alt="charaters Img"
          />
        </Box>
        <VStack w="7xl">
          {/* 타이틀 */}
          <HStack w="full" py="16" justifyContent={"space-between"}>
            <Box>
              <Text fontSize={32} fontWeight={"bold"} textTransform={"uppercase"}>
                Characters
              </Text>
            </Box>
            <Select w="32">
              <option value={6}>6</option>
              <option value={12}>12</option>
              <option value={18}>18</option>
              <option value={24}>24</option>
              <option value={30}>30</option>
              <option value={36}>36</option>
            </Select>
          </HStack>
          {/* 게시판 */}
          <Grid templateColumns={"repeat(6, 1fr)"} w="full" gap="4">
            <GridItem w="full" bg="red.500"></GridItem>
          </Grid>
        </VStack>
      </VStack>
    </>
  );
}
