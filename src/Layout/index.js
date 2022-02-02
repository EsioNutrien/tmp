import React from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Layout({ children, title }) {
  let navigate = useNavigate();
  return (
    <>
      <Box
        bg="#314E9A"
        w="100%"
        py={4}
        px={8}
        color="white"
        fontWeight="bold"
        fontSize="2rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box onClick={() => navigate("/")} cursor="pointer">
          Kort
        </Box>
        <Button bg="white" color="#314E9A" onClick={() => navigate("/metrics")}>
          Ver métricas
        </Button>
        <Button bg="white" color="#314E9A" onClick={() => navigate("/card")}>
          Ver card
        </Button>
      </Box>
      <Box py={8} px={8} backgroundColor="#f7f7f7" h="calc(100vh - 80px)">
        {title && <Heading pb={8}>{title}</Heading>}
        {children}
        <Box position="fixed" right="4" bottom="2rem">
          <Box
            p={8}
            cursor="pointer"
            bg="#314E9A"
            color="white"
            w="2rem"
            height="2rem"
            borderRadius="50%"
            display="flex"
            alignItems="center"
            fontSize="2rem"
            justifyContent="center"
            boxShadow="1px 2px 3px #ccc"
          >
            ?
          </Box>
        </Box>
      </Box>
    </>
  );
}
