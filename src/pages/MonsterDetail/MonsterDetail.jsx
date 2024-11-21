import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MonsterContext } from '../../context/MonsterContext/MonsterContext';
import { Box, Image, Text, VStack, Heading, Flex } from "@chakra-ui/react";

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
        <VStack align="start" spacing={4} mt={4}>
          <Heading>{monster.name}</Heading>
          <Text>{monster.description}</Text>
        </VStack>
      </Flex>
    </Box>
  );
};

export default MonsterDetail;