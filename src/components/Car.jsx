import { Box, HStack, Text } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Car() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box w="full">
      <Slider {...settings}>
        <HStack
          w="full"
          h="1000px"
          backgroundImage={'url("https://media.contentapi.ea.com/content/dam/news/www-ea/common/ea-motive-new-title-teaser-16x9.jpg.adapt.1456w.jpg")'}
          backgroundSize="cover"
        ></HStack>
        <HStack
          w="full"
          h="1000px"
          backgroundImage={'url("https://media.contentapi.ea.com/content/dam/news/www-ea/common/ea-motive-new-title-teaser-16x9.jpg.adapt.1456w.jpg")'}
          backgroundSize="cover"
        ></HStack>
        <HStack
          w="full"
          h="1000px"
          backgroundImage={'url("https://media.contentapi.ea.com/content/dam/news/www-ea/common/ea-motive-new-title-teaser-16x9.jpg.adapt.1456w.jpg")'}
          backgroundSize="cover"
        ></HStack>
      </Slider>
    </Box>
  );
}
