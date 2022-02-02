import React from "react";
import Layout from "../../Layout";
import data from "../../data";
import { Box, HStack, Text } from "@chakra-ui/layout";
import Card from "../Card";
import { Button } from "@chakra-ui/button";

export default function Column({ title, hasCardBtn = false }) {
  const sectionStyle = {
    backgroundColor: "#5B8ADA",
    padding: "1rem",
    boxShadow: "1px 2px 3px #35353550",
    borderRadius: "1rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "white",
    justifyContent: "space-between",
  };

  return (
    <Box minWidth={400}>
      <HStack {...sectionStyle}>
        <Text>{title}</Text>
        {hasCardBtn && (
          <Button onClick={() => {}} color="#5B8ADA">
            Novo Cartão
          </Button>
        )}
      </HStack>
      <Box>
        <Card />
      </Box>
    </Box>
  );
}
