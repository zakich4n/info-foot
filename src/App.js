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
import League from './components/league.jsx';

function App() {
  state = {
    // 39 Premier League | 180 Championship
    // 61 Ligue 1 | 62 Ligue 2
    // 140 La Liga
    //135 Serie A
    //78 Bundesliga 1 | 79 Bundesliga 2
    //144 Jupiler Pro League
    // 197 Super League
    // 203 Toto Super Lig
    // 88 Euredivise
    leagues : [39, 180, 61, 62, 140, 135, 78, 79, 144, 197, 203, 88]
  };
  return (
    <ChakraProvider theme={theme} >
      <Header/>
      <Flex>
        {
        //<FootballClub club_id={'33'} selected={true} />
        }
        <League/>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
