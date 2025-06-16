import React from "react";
import { Box, Flex, Link, Text, Icon } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box backgroundColor="#18181b">
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          py={4}
          color="white"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="1024px"
          flexWrap="wrap"
        >
          <Text mb={[2, 0]}>
            Tanner Galambas • © {new Date().getFullYear()}
          </Text>
          <Flex gap={6} alignItems="center" flexWrap="wrap" justifyContent="center">
            <Link
              href="https://www.linkedin.com/in/tanner-galambas/"
              isExternal
              _hover={{ textDecoration: "underline", color: "#0e76a8" }}
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Icon as={FaLinkedin} />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/tannergalambas"
              isExternal
              _hover={{ textDecoration: "underline", color: "#f5f5f5" }}
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Icon as={FaGithub} />
              GitHub
            </Link>
            <Link
              href="mailto:tanner.galambas@gmail.com"
              _hover={{ textDecoration: "underline", color: "#f56565" }}
              display="flex"
              alignItems="center"
              gap={2}
            >
              <Icon as={FaEnvelope} />
              Email
            </Link>
          </Flex>
        </Flex>
      </footer>
    </Box>
  );
};

export default Footer;
