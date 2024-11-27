import {
  Box,
  Image,
  Text,
  VStack,
  Heading,
  Flex,
  HStack,
  IconButton,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import ButtonSocialMedia from "../ButtonSocialMedia/ButtonSocialMedia";
import Cart from "../Cart/Cart";

function CardMonsterDetail({monster}) {
  console.log(monster)
  return (
    <Flex
    flexDirection={{ base: "column", md: "row" }}
    alignItems="center"
    bg="rgba(255, 255, 255, 0.1)"
    backdropFilter="blur(10px)"
    borderRadius="lg"
    overflow="hidden"
    p={5}
    height="auto"
  >
    <Box width={{ base: "100%", md: "50%" }} maxH="80vh">
      <Image
        src={monster.imageUrl}
        alt={monster.name}
        objectFit="cover"
        width="100%"
        height="100%"
        borderRadius="lg"
        maxH="80vh"
      />
    </Box>
    <VStack
      align="flex-start"
      p={5}
      spacing={3}
      width={{ base: "100%", md: "50%" }}
      mt={{ base: 5, md: 0 }}
      maxH="80vh"
    >
      <Heading as="h2" size="xl" color="white">
        {monster.name}
      </Heading>
      <HStack spacing={1}>
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            color={i < monster.rating ? "teal.500" : "gray.300"}
          />
        ))}
        <Text fontSize="lg" color="white">
          {monster.rating}
        </Text>
      </HStack>
      <Text fontSize="lg" color="white">
        {monster.description}
      </Text>
      <Text fontSize="2xl" fontWeight="bold" color="white">
        ${monster.price}
      </Text>
      <Cart/>
     <ButtonSocialMedia/>
    </VStack>
  </Flex>
  )
}

export default CardMonsterDetail