import { Flex, Box, Heading, Spacer,Menu, MenuButton , IconButton , Avatar, MenuList , MenuItem ,Divider } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";

function NavBar() {
  return (
    <Box
      bg="rgba(0, 0, 0, 0.0)"
      backdropFilter="blur(10px)"
      p={4}
      color="white"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      maxW={"100%"}
    >
      <Flex justify="space-between" align="center" maxW="1400px" mx="auto">
        <Heading as="h1" size="lg" textColor="brand.100" fontWeight="thin">
          <Link to="/">
          Happy{" "}
          <Spacer
            as="span"
            display={{ base: "none", md: "inline" }}
            textColor={"brand.200"}
            position={"relative"}
            left={"-10px"}
          >
            Monstry
          </Spacer>
          </Link>
        </Heading>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={
              <Avatar
                size="sm"
                name="User Name"
                src="https://bit.ly/broken-link"
              />
            }
            colorScheme="whiteAlpha"
            variant="ghost"
            ml={4}
          />
          <MenuList
            bg="rgba(0, 0, 0, 0.8)"
            backdropFilter="blur(50px)"
            borderColor="rgba(255, 255, 255, 0.10)"
            color="white"
          >
            <MenuItem
              as={RouterLink}
              to="/profile"
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
              _focus={{ bg: "rgba(255, 255, 255, 0.2)" }}
              bg="rgba(0, 0, 0, 0.0)"
              color="white"
            >
              Profile
            </MenuItem>
            <MenuItem
              as={RouterLink}
              to="/orders"
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
              _focus={{ bg: "rgba(255, 255, 255, 0.2)" }}
              bg="rgba(0, 0, 0, 0.0)"
              color="white"
            >
              Orders
            </MenuItem>
            <MenuItem
              as={RouterLink}
              to="/settings"
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
              _focus={{ bg: "rgba(255, 255, 255, 0.2)" }}
              bg="rgba(0, 0, 0, 0.0)"
              color="white"
            >
              Settings
            </MenuItem>
            <Divider />
            <MenuItem
              as={RouterLink}
              to="/admin/product-manager"
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
              _focus={{ bg: "rgba(255, 255, 255, 0.2)" }}
              bg="rgba(0, 0, 0, 0.0)"
              color="white"
            >
              Product Manager
            </MenuItem>
            <MenuItem
              as={RouterLink}
              to="/logout"
              _hover={{ bg: "rgba(255, 255, 255, 0.2)" }}
              _focus={{ bg: "rgba(255, 255, 255, 0.2)" }}
              bg="rgba(0, 0, 0, 0.0)"
              color="white"
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  )
}

export default NavBar