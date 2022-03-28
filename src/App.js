import React from 'react';
import {
  ChakraProvider, SimpleGrid,
  
} from '@chakra-ui/react';
import Header from './components/header.jsx';
import FootballClub from './components/football_club.jsx';
import League from './components/league.jsx';

const state = {
    // 39 Premier League | 40 Championship
    // 61 Ligue 1 | 62 Ligue 2
    // 140 La Liga
    //135 Serie A
    //78 Bundesliga 1 | 79 Bundesliga 2
    //144 Jupiler Pro League
    // 197 Super League
    // 203 Toto Super Lig
    // 88 Euredivise
    leaguesID : [39, 40, 61, 62, 140, 135, 78, 79, 144, 197, 203, 88]
  };


function App() {
  
  return (
    <ChakraProvider>
      <Header/>
      <SimpleGrid spacing='40px'>
        {
        //<FootballClub club_id={'33'} selected={true} />
        //state.leaguesID.map(league => (
         // <League key={league} leagueID={league} selected={true} />
        //))
        }
        
      </SimpleGrid>
    </ChakraProvider>
  );
}

export default App;
