import { Box, Button, HStack, Image, Stack, Text, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [scroll, setScroll] = useState(true);
  const location = useLocation();
  const [winScroll, setWinScroll] = useState(true);

  useEffect(() => {
    document.addEventListener("wheel", (event) => {
      if (event.deltaY < 0) {
        //휠 스크롤 올림
        setScroll(true);
      } else if (event.deltaY > 0) {
        //휠 스크롤 내림
        setScroll(false);
      }
      if (window.scrollY < 80) {
        setWinScroll(true);
      } else if (window.screenY > 80) {
        setWinScroll(false);
      }
    });
  });
  const { colorMode, toggleColorMode } = useColorMode();
  const GNB = [
    {
      title: "home",
      href: "/",
    },
    {
      title: "characters",
      href: "/characters",
    },
    {
      title: "comics",
      href: "/comics",
    },
    {
      title: "events",
      href: "/events",
    },
  ];
  console.log(GNB.map((item) => item.href));
  console.log(location.pathname);
  return (
    <Stack
      w="full"
      h="60px"
      color={GNB.map((item) => (location.pathname === item.href ? "red" : "white"))}
      fontWeight={600}
      fontSize={"20px"}
      alignItems={"center"}
      justifyContent={"center"}
      boxShadow={"sm"}
      position="fixed"
      bg={winScroll ? "transprent" : "gray.800"}
      transform={scroll ? "translateY(0px)" : "translateY(-60px)"}
      transition={".4s"}
      zIndex={999}
    >
      <HStack w="7xl" justifyContent={"space-between"} h="full">
        <HStack spacing={8}>
          <Box>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" alt="Main logo" w="24" />
          </Box>
          <HStack spacing="4" textTransform={"uppercase"}>
            {GNB.map((item) => (
              <Link to={item.href} key={item.title} aria-label={item.title}>
                <Text>{item.title}</Text>
              </Link>
            ))}
          </HStack>
        </HStack>
        <Button onClick={toggleColorMode}>{colorMode === "light" ? <BsFillSunFill /> : <BsFillMoonStarsFill />}</Button>
      </HStack>
    </Stack>
  );
}
