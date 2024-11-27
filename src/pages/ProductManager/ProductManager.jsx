import React, { useState, useMemo, useCallback, useEffect } from "react";
import { useTable, useSortBy, useGlobalFilter, Column } from "react-table";
import {
  Box,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Switch,
  useDisclosure,
  Image,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { useContext } from "react";
import { MonsterContext } from "../../context/MonsterContext/MonsterContext";
import MonsterTable from "../../components/MonsterTable/MonsterTable";

function ProductManager() {
  const {monsters} = useContext(MonsterContext);
  return (
    <Box
      maxW="1200px"
      mx="auto"
      p={5}
      mt="110px"
      bg="rgba(255, 255, 255, 0.1)"
      backdropFilter="blur(10px)"
      borderRadius="lg"
      boxShadow="lg"
    >
      <Heading as="h2" size="xl" color="white" mb={5} textAlign="center">
        Manage Products
      </Heading>
      <VStack spacing={4} align="stretch">
        {/* <SearchBar
          globalFilter={globalFilter || ""}
          setGlobalFilter={setGlobalFilter}
        /> */}
        <FormControl display="flex" alignItems="center" mb={5}>
          <FormLabel htmlFor="show-featured" mb="0" color="white">
            Show Featured Only
          </FormLabel>
          {/* <Switch
            id="show-featured"
            isChecked={showFeatured}
            onChange={() => setShowFeatured(!showFeatured)}
          /> */}
        </FormControl>
        <MonsterTable monsters={monsters}/>
        {/* <ProductTable
          products={data}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleFeaturedChange={handleFeaturedChange}
        /> */}
      </VStack>
      {/* <DeleteDialog
        isOpen={isOpen}
        onClose={onClose}
        onDelete={confirmDelete}
      /> */}
    </Box>
  )
}

export default ProductManager