import { useState } from 'react';
import { Box, Heading, Input, Textarea, Button, HStack } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

function ReviewForm({ monsterId, createReview }) {
  const [reviewText, setReviewText] = useState('');
  const [reviewerName, setReviewerName] = useState('');
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1); // Ajusta el rating según el índice de la estrella seleccionada
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = {
      productId: monsterId,
      body: reviewText,
      username: reviewerName,
      rating,
    };
    
    try {
      await createReview(newReview);
      setReviewText('');
      setReviewerName('');
      setRating(0);
    } catch (error) {
      console.error('Failed to create review:', error);
    }
  };

  return (
    <Box
      mt={5}
      p={5}
      bg="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(10px)"
      borderRadius="lg"
    >
      <Heading as="h3" size="lg" color="white" mb={4}>
        Add a Review
      </Heading>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Your Name"
          value={reviewerName}
          onChange={(e) => setReviewerName(e.target.value)}
          mb={3}
        />
        <Textarea
          placeholder="Your Review"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          mb={3}
        />
        <HStack spacing={1} mb={3}>
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              color={i < rating ? 'teal.500' : 'gray.300'}
              cursor="pointer"
              onClick={() => handleStarClick(i)}
            />
          ))}
        </HStack>
        <Button type="submit" colorScheme="teal">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default ReviewForm;
