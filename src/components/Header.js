import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link, Text } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:tanner.galambas@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/tannergalambas",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/tanner-galambas/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@tannergalambas", // placeholder — update once created
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/your-id", // placeholder — update once created
  },
];

const Header = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    let prevScrollPosition = window.scrollY;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) return;

      if (prevScrollPosition > currentScrollPosition) {
        headerElement.style.transform = "translateY(0px)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }

      prevScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transition="transform 0.3s ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
      zIndex={1000}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack px={8} py={4} justifyContent="space-between" alignItems="center">
          <Text fontWeight="bold" fontSize="lg">Tanner Galambas</Text>

          <HStack spacing={5}>
            {socials.map((social) => (
              <Link
                key={social.url}
                href={social.url}
                isExternal
                _hover={{ color: "#90cdf4" }}
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </Link>
            ))}
          </HStack>

          <HStack spacing={8}>
            <Link
              href="#projects"
              onClick={handleClick("projects")}
              _hover={{ color: "#90cdf4" }}
            >
              Projects
            </Link>
            <Link
              href="#contactme"
              onClick={handleClick("contactme")}
              _hover={{ color: "#90cdf4" }}
            >
              Contact Me
            </Link>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
