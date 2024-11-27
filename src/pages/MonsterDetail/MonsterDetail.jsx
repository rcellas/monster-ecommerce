import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import monsterImg from '../../assets/monster1.png';
import { MonsterContext } from '../../context/MonsterContext/MonsterContext';
import { Box, Image, Text, VStack, Heading, Flex } from "@chakra-ui/react";
import CardMonsterDetail from '../../components/CardMonsterDetail/CardMonsterDetail';

const MonsterDetail = () => {
  const { monsterId } = useParams();
  const { monsters } = useContext(MonsterContext);

  if (!monsters || monsters.length === 0) {
    return <div>Loading...</div>;
  }

  const monster = monsters.find((m) => m.id === monsterId);

  if (!monster) {
    return <div>Monster not found</div>;
  }

  return (
    <Box maxW="1200px" mx="auto" p={5} mt="100px" maxH="80vh" key={monster.id}>
      <CardMonsterDetail monster={monster} />
    </Box>
  );
};

export default MonsterDetail;