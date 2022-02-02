import React from "react";
import { Box, Text, HStack, VStack } from "@chakra-ui/layout";
import {
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
} from "@chakra-ui/slider";

export default function Card() {
  const nextIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.0607 13.0607C23.6464 12.4749 23.6464 11.5251 23.0607 10.9393L13.5147 1.3934C12.9289 0.807613 11.9792 0.807613 11.3934 1.3934C10.8076 1.97919 10.8076 2.92893 11.3934 3.51472L19.8787 12L11.3934 20.4853C10.8076 21.0711 10.8076 22.0208 11.3934 22.6066C11.9792 23.1924 12.9289 23.1924 13.5147 22.6066L23.0607 13.0607ZM-1.31134e-07 13.5L22 13.5L22 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"
        fill="#314E9A"
      />
    </svg>
  );

  return (
    <Box
      backgroundColor="white"
      p={4}
      my={4}
      boxShadow="1px 2px 3px #35353550"
      borderRadius="1rem"
    >
      <HStack justifyContent="space-between" alignItems="flex-start">
        <Text fontWeight="bold" fontSize="xl" color="#314E9A">
          Adding Products Details
        </Text>
        <Text fontWeight="bold" fontSize="l" color="#999">
          #0004
        </Text>
      </HStack>

      <Text my={4} fontSize="sm">
        Como Consultor Quero poder pesquisar e selecionar os produtos que desejo
        para meu cliente ....
      </Text>
      <VStack>
        <HStack justifyContent="space-between" w="100%">
          <Text m={0} fontSize="xs">
            Progresso
          </Text>
          <Text m={0} fontSize="xs">
            50%
          </Text>
        </HStack>
        <RangeSlider
          defaultValue={[0, 50]}
          min={0}
          max={100}
          step={1}
          isDisabled
        >
          <RangeSliderTrack bg="green">
            <RangeSliderFilledTrack bg="green" />
          </RangeSliderTrack>
        </RangeSlider>
      </VStack>
      <HStack justifyContent="space-between" w="100%" mt={4}>
        <Box p={4} borderRadius="50%" backgroundColor="#353535" />
        <Box cursor="pointer">{nextIcon}</Box>
      </HStack>
    </Box>
  );
}
