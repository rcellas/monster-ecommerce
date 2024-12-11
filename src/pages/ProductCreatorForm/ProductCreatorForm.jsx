import React, { useState, useContext } from 'react';
import { Box, Button, FormControl, FormLabel, Input, Textarea, Switch, Heading, useToast } from '@chakra-ui/react';
import { MonsterContext } from '../../context/MonsterContext/MonsterContext';

function ProductCreatorForm() {
  const { addMonster } = useContext(MonsterContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [featured, setFeatured] = useState(false);
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !description || !price || !image) {
      toast({
        title: "Error",
        description: "All fields are required.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (isNaN(price) || price <= 0) {
      toast({
        title: "Error",
        description: "Price must be a positive number.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    const newMonster = { name, description, price, image, featured };
    addMonster(newMonster);

    // Limpiar el formulario después de enviar
    setName('');
    setDescription('');
    setPrice('');
    setImage('');
    setFeatured(false);

    toast({
      title: "Success",
      description: "Monster created successfully.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box maxW="md" mx="auto" mt={20} p={5} borderWidth={1} borderRadius="lg" boxShadow="lg" bg="white">
      <Heading as="h2" size="xl" mb={5} textAlign="center" color="gray.800">
        Create New Monster
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb={4} isRequired>
          <FormLabel color="gray.800">Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter monster name"
            _placeholder={{ color: 'gray.600' }}
            color="black"
            bg="gray.100"
            borderColor="gray.300"
            _hover={{ borderColor: 'gray.400' }}
            _focus={{ borderColor: 'blue.500' }}
          />
        </FormControl>
        <FormControl id="description" mb={4} isRequired>
          <FormLabel color="gray.800">Description</FormLabel>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter monster description"
            _placeholder={{ color: 'gray.600' }}
            color="black"
            bg="gray.100"
            borderColor="gray.300"
            _hover={{ borderColor: 'gray.400' }}
            _focus={{ borderColor: 'blue.500' }}
          />
        </FormControl>
        <FormControl id="price" mb={4} isRequired>
          <FormLabel color="gray.800">Price</FormLabel>
          <Input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter monster price"
            _placeholder={{ color: 'gray.600' }}
            color="black"
            bg="gray.100"
            borderColor="gray.300"
            _hover={{ borderColor: 'gray.400' }}
            _focus={{ borderColor: 'blue.500' }}
          />
        </FormControl>
        <FormControl id="image" mb={4} isRequired>
          <FormLabel color="gray.800">Image URL</FormLabel>
          <Input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter image URL"
            _placeholder={{ color: 'gray.600' }}
            color="black"
            bg="gray.100"
            borderColor="gray.300"
            _hover={{ borderColor: 'gray.400' }}
            _focus={{ borderColor: 'blue.500' }}
          />
        </FormControl>
        <FormControl display="flex" alignItems="center" mb={4}>
          <FormLabel htmlFor="featured" mb="0" color="gray.800">
            Featured
          </FormLabel>
          <Switch
            id="featured"
            isChecked={featured}
            onChange={() => setFeatured(!featured)}
            colorScheme="blue"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full">
          Create Monster
        </Button>
      </form>
    </Box>
  );
}

export default ProductCreatorForm;