import { Box, Grid, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Car from "../components/Car";
import CardItem from "../components/CardItems";
import TitleImageSkew from "../components/TitleImageSkew";
import { useQuery } from "react-query";
import Slider from "react-slick";
import { Link } from "react-router-dom";

export default function Home() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://gateway.marvel.com:443/v1/public/comics?apikey=b56a537aa50593c767e52d7ae0a5a965").then((res) => res.json())
  );
  console.log(isLoading, error, data);

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

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
      {/*comics 컨텐츠 리스트 */}
      <VStack w="full" position={"relative"} h="400px">
        {/*한박스 위로 올라오게 하는 범위지정 */}

        <Box position={"absolute"} w="7xl" py="8" px="2" alignItems={"center"} top="-16" bg="white">
          <Slider {...settings}>
            {data?.data?.results?.map((item, i) => (
              <Link to={`/comics/${item.id}`}>
                <VStack key={i} h="full" role="group" cursor={"pointer"}>
                  <Box overflow={"hidden"} w="170px" h="240px">
                    <Box w="170px" h="240px" _groupHover={{ transform: "scale(1.1)", transition: "0.4s" }}>
                      <Image src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`Comics ${i}`} w="full" h="full" objectFit={"cover"} />
                    </Box>
                  </Box>
                  <Text px="2" mt="2" _groupHover={{ color: "red.500", fontWeight: "600" }}>
                    {item.title.substr(0, 36)}
                  </Text>
                </VStack>
              </Link>
            ))}
          </Slider>
        </Box>
      </VStack>
    </>
  );
}
