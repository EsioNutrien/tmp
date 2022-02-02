import React from "react";
import Layout from "../../Layout";
import data from "../../data";
import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import Column from "../../Components/Column";
import { Button } from "@chakra-ui/button";

export default function MainPage() {
  const defaultSectionWidth = 400;
  const buildSectionStyle = {
    backgroundColor: "#5B8ADA",
    padding: "1rem",
    boxShadow: "1px 2px 3px #35353550",
    borderRadius: "1rem",
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "white",
    justifyContent: "space-between",
  };

  console.log(data);

  return (
    <Layout title="Quadro Loja de Produtos">
      <HStack overflow="scroll" alignItems="flex-start" spacing={5}>
        <Column title={data["backlog"].name} hasCardBtn={true} />

        {data["sections"].map((section) => (
          <Box
            minWidth={`${section.columns.length * defaultSectionWidth}px`}
            mr={4}
          >
            <HStack {...buildSectionStyle}>
              <Text>{section.name}</Text>
            </HStack>
            <HStack mt={4}>
              {section.columns.map((column) => (
                <Column title={data["backlog"].name} />
              ))}
            </HStack>
          </Box>
        ))}

        <Column title={data["finished"].name} />
      </HStack>
    </Layout>
  );
}
