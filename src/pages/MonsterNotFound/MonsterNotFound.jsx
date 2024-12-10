import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function MonsterNotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, blue.500, blue.700)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Monster Not Found
      </Text>
      <Text color={'gray.700'} mb={6}>
        The monster you are looking for does not exist.
      </Text>
      <Button
        as={Link}
        to="/"
        colorScheme="blue"
        bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
        color="white"
        variant="solid"
      >
        Go to Home
      </Button>
    </Box>
  );
}

export default MonsterNotFound;