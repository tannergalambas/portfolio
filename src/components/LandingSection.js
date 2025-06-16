import React from "react";
import { Avatar, Heading, VStack, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import tannerImage from "../images/TannerGalambas.jpeg";

const greeting = "Hello, I am Tanner!";
const tagline = "Turning ideas into accessible, engaging experiences.";
const bio1 = "A frontend developer";
const bio2 = "Specialized in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={[6, 8, 10]}>
      <Avatar src={tannerImage} size="2xl" name="Tanner Galambas" />
      <Heading as="h4" size="md">{greeting}</Heading>
      <Text fontSize="sm" textAlign="center" maxWidth="sm" color="gray.200">
        {tagline}
      </Text>
      <VStack spacing={4}>
        <Heading as="h1" fontSize={["2xl", "3xl", "4xl"]}>{bio1}</Heading>
        <Heading as="h1" fontSize={["2xl", "3xl", "4xl"]}>{bio2}</Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
