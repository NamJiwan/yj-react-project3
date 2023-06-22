import { Box, Grid, HStack } from "@chakra-ui/react";
import Car from "../components/Car";
import CardItem from "../components/CardItems";
import TitleImageSkew from "../components/TitleImageSkew";

export default function Home() {
  const featuresLists = [
    {
      title: "스마트웹3기",
      description: "동해불과 백두산위 마르고 닳도록",
      buttonText: "자세히보기",
    },
    {
      title: "API 요청량 하루 3000번 리미트",
      description: "동해불과 백두산위 마르고 닳도록",
      buttonText: "자세히보기",
    },
    {
      title: "React",
      description: "동해불과 백두산위 마르고 닳도록",
      buttonText: "자세히보기",
    },
  ];
  return (
    <>
      {/* 캐러셀 */}
      <Box w="full">
        <Car />
      </Box>
      {/* 특장점*/}
      <HStack w={"full"} justifyContent={"center"} py="16" bg="gray.100">
        <Grid w="7xl" templateColumns={"repeat(3,1fr)"} gap="4">
          {featuresLists.map((item, i) => (
            <CardItem key={i} item={item} />
          ))}
        </Grid>
      </HStack>
      {/*이미지 타이틀 */}
      <TitleImageSkew
        title="Comics"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit neque ex error nisi facilis itaque illum, nam nesciunt consequatur eius animi
        doloremque tempora placeat eum molestiae fuga laudantium et adipisci?"
        imgUrl="https://economychosun.com/site/data/img_dir/2019/06/01/2019060100006_0.jpg"
      />
    </>
  );
}
