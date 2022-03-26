import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Input,
  Flex,
  Heading,
  SimpleGrid,
  Button
} from '@chakra-ui/react';
import Header from './components/header.jsx';
import FootballClub from './components/football_club.jsx';


function App() {
  return (
    <ChakraProvider theme={theme} >
      <Header/>
      <Flex>
        <FootballClub/>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
