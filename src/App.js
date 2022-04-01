import React, { useState } from 'react';
import {
  ChakraProvider, SimpleGrid, Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Avatar,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Center,
  Icon
} from '@chakra-ui/react';
import { useDisclosure, Spinner } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react'
import Header from './components/header.jsx';
import FootballClub from './components/football_club.jsx';
//import League from './components/league.jsx';
import { useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useLocation
} from "react-router-dom";
const currentDate = new Date();


  function useQuery() {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
  
  export default function App() {
    let query = useQuery();
    console.log(query.toString());
  return (
    <Router>
      <ChakraProvider>
        <Header/>
      </ChakraProvider>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/league">
            <League league_id={query.get("id")} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


  
function League ({league_id}) {
  let query = useQuery();
  league_id=query.get("id");

  const optionsLeagueStandings = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/standings',
      params: {
          league: league_id,
          season: 2021
      },
      headers: {
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '91eeb26ed8msh8447d341df76518p1a7653jsna3db505351af'
      }
  }

  const [data, setData]= useState({error: false, standings : { "get":"standings","parameters":{"league":"39","season":"2021"},"errors":[],"results":1,"paging":{"current":1,"total":1},"response":[{"league":{"id":39,"name":"PremierLeague","country":"England","logo":"https:\/\/media.api-sports.io\/football\/leagues\/39.png","flag":"https:\/\/media.api-sports.io\/flags\/gb.svg","season":2021,"standings":[[{"rank":1,"team":{"id":50,"name":"Equipe","logo":""},"points":70,"goalsDiff":50,"group":"PremierLeague","form":"DWWLW","status":"same","description":"Promotion-ChampionsLeague(GroupStage)","all":{"played":29,"win":0,"draw":0,"lose":0,"goals":{"for":0,"against":0}},"home":{"played":14,"win":11,"draw":1,"lose":2,"goals":{"for":40,"against":10}},"away":{"played":15,"win":11,"draw":3,"lose":1,"goals":{"for":28,"against":8}},"update":"2022-03-29T00:00:00+00:00"}]]}}] }});  
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTeamInfo, setSelectedTeamInfo] = React.useState({"rank":1,"team":{"id":50,"name":"TeamName","logo":"https://media.api-sports.io/football/teams/50.png"},"points":70,"goalsDiff":50,"group":"PremierLeague","form":"DWWLW","status":"same","description":"Promotion-ChampionsLeague(GroupStage)","all":{"played":29,"win":22,"draw":4,"lose":3,"goals":{"for":68,"against":18}},"home":{"played":14,"win":11,"draw":1,"lose":2,"goals":{"for":40,"against":10}},"away":{"played":15,"win":11,"draw":3,"lose":1,"goals":{"for":28,"against":8}},"update":"2022-03-29T00:00:00+00:00"});

  const handleTeamInfo = (team) => {
    setSelectedTeamInfo(team);
    onOpen();
  }

  useEffect(() => {
    console.log("The League istance is refreshed with ID : ",league_id);
    axios.request(optionsLeagueStandings).then((response) => {
      setData(prevState => {
          return {...prevState, standings:response.data}
      })
  }
  ).catch(function (error) {
      console.error(error);
  });
  }, [league_id])

      console.log("Received data :",data);
      let teams=data['standings']['response'][0]['league']['standings'][0];
      return (<ChakraProvider>
                  <SimpleGrid spacing='40px'>
                              
                      <Table variant='striped' colorScheme='teal' size='sm'>
                          <TableCaption>Equipe de la ligue {league_id}</TableCaption>
                          <Thead>
                          <Tr>
                              <Th></Th>
                              <Th>Equipe</Th>
                              <Th>V</Th>
                              <Th>N</Th>
                              <Th>D</Th>
                              <Th>Fiche Info</Th>
                              <Th isNumeric>But marqués</Th>
                              <Th isNumeric>1ere MT</Th>
                              <Th isNumeric>2eme MT</Th>
                              <Th isNumeric>Buts encaissés</Th>
                              <Th isNumeric>1ere MT</Th>
                              <Th isNumeric>2eme MT</Th>
                          </Tr>
                          </Thead>
                          <Tbody>
                            {
                            teams.map((team, index) =>{
                              return(<Tr key={index}> 
                                <Td><Avatar size='sm' name={team['team']['name']} src={team['team']['logo']}/></Td>
                                <Td>{team['team']['name']}</Td>
                                <Td>{team['all']['win']}</Td>
                                <Td>{team['all']['draw']}</Td>
                                <Td>{team['all']['lose']}</Td>
                                <Td>
                                <IconButton key={team} isRound={true} variant="ghost" onClick={() => handleTeamInfo(team)} icon={<InfoOutlineIcon/>}/>
                              </Td>
                                <Td isNumeric>{team['all']['goals']['for']}</Td>
                                <Td isNumeric>9</Td>
                                <Td isNumeric>13</Td>
                                <Td isNumeric>{team['all']['goals']['against']}</Td>
                                <Td isNumeric>6</Td>
                                <Td isNumeric>9</Td>
                                
                              </Tr>)
                            })}
                          </Tbody>
                      </Table>
                      <Modal isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />
                              <ModalContent>
                                <ModalHeader>{(typeof selectedTeamInfo['team']==='undefined') ? 'Empty' : selectedTeamInfo['team']['name']}</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                  {
                                    <h1>Test Team : {selectedTeamInfo['team']['name']}</h1>
                                    //<FootballClub club_id={league_id} team_id={data} />
                                    //waitForElement(club['team'], data['statistics'])
                                  }
                                </ModalBody>
                                <ModalFooter>
                                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                  </Button>
                                </ModalFooter>
                              </ModalContent>
                          </Modal>
                  </SimpleGrid>       
              </ChakraProvider>);
  
}
