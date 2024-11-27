import {
    HStack,
    IconButton,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function ButtonSocialMedia() {
  return (
    <HStack spacing={4} mt={4}>
    <IconButton
      aria-label="Share on Facebook"
      icon={<FaFacebook />}
      colorScheme="facebook"
      variant="outline"
    />
    <IconButton
      aria-label="Share on Twitter"
      icon={<FaTwitter />}
      colorScheme="twitter"
      variant="outline"
    />
    <IconButton
      aria-label="Share on Instagram"
      icon={<FaInstagram />}
      colorScheme="pink"
      variant="outline"
    />
  </HStack>
  )
}

export default ButtonSocialMedia