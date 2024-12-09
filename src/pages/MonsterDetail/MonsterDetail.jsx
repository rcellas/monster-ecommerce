import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, VStack, Heading, Flex } from "@chakra-ui/react";
import CardMonsterDetail from '../../components/MonsterDetail/CardMonsterDetail';
import { getMonsterById } from '../../service/MonsterService';
import { MonsterContext } from '../../context/MonsterContext/MonsterContext';
import ReviewMonsterDetail from '../../components/Reviews/ReviewMonsterDetail';

const MonsterDetail = () => {
  const { monsterId } = useParams();
  const [monster, setMonster] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMonster = async () => {
      try {
        const data = await getMonsterById(monsterId);
        setMonster(data);
      } catch (error) {
        console.error("Error fetching monster:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMonster();
  }, [monsterId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!monster) {
    return <div>Monster not found</div>;
  }

  return (
    <Box maxW="1200px" mx="auto" p={5} mt="40px" maxH="80vh">
      <CardMonsterDetail monster={monster} />
      <ReviewMonsterDetail  reviews={monster.reviews}/>
    </Box>
  );
};

export default MonsterDetail;