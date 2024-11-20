import {
    Box,
    Button,
    Heading,
    Image,
    Text,
    HStack,
    Icon,
  } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import {Link as ReactRouterLink} from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

function MonsterCard({monster}) {
  return (
    <Box
        key={monster.id}
        position="relative"
        height="450px"
        borderRadius="lg"
        overflow="hidden"
        transition="transform 0.2s"
        _hover={{ transform: "scale(1.05)" }}
        bg="rgba(255, 255, 255, 0.1)"
        backdropFilter="blur(10px)"
        border="1px solid rgba(255, 255, 255, 0.18)"
    >
        {monster.featured && (
        <Box
          position="absolute"
          top="8px"
          right="-20px"
          width="150px"
          height="40px"
          bg="brand.250"
          color="white"
          borderRadius="0 0 10px 10px"
          border="1px solid rgba(255, 255, 255, 0.4)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontWeight="thin"
          textColor="white"
          backdropFilter="blur(10px)"
          boxShadow="0 0 20px rgba(0, 0, 0, 0.2)"
          transform="rotate(40deg)"
        >
          featured
        </Box>
      )}
      <ChakraLink as={ReactRouterLink} to={`/shop/monsters/${monster.id}`}>
        <Image
          src={monster.imageUrl}
          alt={monster.name}
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </ChakraLink>
      <Box
        position="absolute"
        bottom="0"
        width="100%"
        bgGradient="linear(to-t, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6), transparent)"
        color="white"
        p={3}
        textAlign="center"
      >
        <Heading as="h3" size="sm" mb={1}>
          {monster.name}
        </Heading>
        <HStack justify="center" mb={1}>
          {/* {renderStars()} */}
          <Text fontSize="sm" ml={2}>
            ({monster.reviewCount})
          </Text>
        </HStack>
        <Text fontSize="md" fontWeight="bold">
          ${monster.price}
        </Text>
        <Button
          size="sm"
          colorScheme="teal"
          leftIcon={<AddIcon />}
          bg="brand.100"
          _hover={{ bg: "brand.200" }}
          _active={{ bg: "brand.300", transform: "scale(0.95)" }}
          borderRadius="full"
          boxShadow="0 0 20px rgba(0, 0, 0, 0.1)"
          mt={2}
        >
          Add to Cart
        </Button>
      </Box>
    </Box>
  )
}

export default MonsterCard