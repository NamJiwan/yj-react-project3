import { Box } from "@chakra-ui/react";
import Car from "../components/Car";

export default function Home() {
  return (
    <>
      {/* 캐러셀 */}
      <Box w="full" h="100vh">
        <Car />
      </Box>
    </>
  );
}
