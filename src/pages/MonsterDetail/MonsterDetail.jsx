import { useParams } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import CardMonsterDetail from '../../components/MonsterDetail/CardMonsterDetail';
import ReviewMonsterDetail from '../../components/Reviews/ReviewMonsterDetail';
import ReviewForm from '../../components/Reviews/ReviewForm';
import { getMonsterById } from '../../service/MonsterService';

import useReviews from '../../hooks/useReviews';
import { useEffect, useState } from 'react';

const MonsterDetail = () => {
  const { monsterId } = useParams();
  const [monster, setMonster] = useState(null);
  const [loading, setLoading] = useState(true);
  const { reviews, createReview, loading: reviewsLoading } = useReviews(monsterId);

  useEffect(() => {
    const fetchMonster = async () => {
      try {
        const data = await getMonsterById(monsterId);
        setMonster(data);
      } catch (error) {
        console.error('Error fetching monster:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMonster();
  }, [monsterId]);

  if (loading || reviewsLoading) {
    return <div>Loading...</div>;
  }

  if (!monster) {
    return <div>Monster not found</div>;
  }

  return (
    <Box maxW="1200px" mx="auto" p={5} mt="40px" maxH="80vh">
      <CardMonsterDetail monster={monster} />
      <ReviewMonsterDetail reviews={reviews} />
      <ReviewForm monsterId={monsterId} createReview={createReview} />
    </Box>
  );
};

export default MonsterDetail;
