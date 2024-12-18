import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from "../components/shared/Header/Header";
import MonsterProvider from "../context/MonsterContext/MonsterProvider";
import Footer from "../components/shared/Footer/Footer";
import { Box, Flex } from '@chakra-ui/react';

const Layout = () => {
  return (
    <MonsterProvider>
      <Flex direction="column" minH="100vh"> {/* Usa minHeight para forzar la altura */}
        <Header />
        {/* El contenido crece para ocupar el espacio sobrante */}
        <Box flex="1">
          <Outlet />
        </Box>
        <Footer />
      </Flex>
    </MonsterProvider>
  );
};

export default Layout;
