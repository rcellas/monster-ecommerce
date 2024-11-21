import { useContext } from 'react';
import {
  Box,
  Button,
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
import { AddIcon, StarIcon } from "@chakra-ui/icons";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { MonsterContext } from '../../context/MonsterContext/MonsterContext';

const MonsterDetail = () => {
  const { monsterId } = useParams();
  const { monsters } = useContext(MonsterContext);

  // Verificar el valor de monsterId
  console.log('monsterId:', monsterId);

  // Mostrar "Cargando..." si los datos aún no están disponibles
  if (!monsters || monsters.length === 0) {
    return <div>Loading...</div>;
  }

  // Buscar el monstruo por ID
  const monster = monsters.find((m) => m.id === Number(monsterId));
  console.log('monster:', monster); // Verificar el valor de monster
  console.log('monster.imageUrl:', monster.imageUrl); // Verificar la URL de la imagen

  // Mostrar mensaje si el monstruo no existe
  if (!monster) {
    return <div>Monster not found</div>;
  }

  return (
    <Box maxW="1200px" mx="auto" p={5} mt="20px" maxH="80vh">
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
          <Button
            size="md"
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
          <HStack spacing={4} mt={4}>
            <IconButton
              aria-label="Share on Facebook"
              icon={<FaFacebook />}
              colorScheme="facebook"
              variant="outline"
            />
            <IconButton
              aria-label="Share on Twitter"
              icon={<FaTwitter />}
              colorScheme="twitter"
              variant="outline"
            />
            <IconButton
              aria-label="Share on Instagram"
              icon={<FaInstagram />}
              colorScheme="pink"
              variant="outline"
            />
          </HStack>
        </VStack>
      </Flex>
    </Box>
  );
};

export default MonsterDetail;