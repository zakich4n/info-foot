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
  Switch,
  BrowserRouter as Router,
  Routes,
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

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setLoading] = useState(true);
  const [selectedTeam, setSelectedTeam]= useState();
  const [data, setData]= useState();

  const handleTeamSelection = (newTeam) => {
    setSelectedTeam(newTeam)
    onOpen()
  }
  
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


    useEffect(() => {
      axios.request(optionsLeagueStandings).then(response => {
          setData(response.data);
      }
      ).catch(function (error) {
          console.error(error);
      });
  }, []);

  if(isLoading) {
    return <Center><Spinner size='xl'/></Center>
}

  console.log(data);
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
                              <Th>Info</Th>
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
                              data['response']['standings'].map((team, index) =>{
                                return(<Tr key={index}>
                              <Td><Avatar size='sm' name={team['team']['name']} src={team['team']['logo']}/></Td>
                              <Td>{team['team']['name']}</Td>
                              <Td>{team['all']['win']}</Td>
                              <Td>{team['all']['draw']}</Td>
                              <Td>{team['all']['lose']}</Td>
                              <Td>
                                <IconButton key={index} isRound={true} variant="ghost" onClick={() => {
                                  handleTeamSelection(team);
                                }} icon={<InfoOutlineIcon/>}/>
                              </Td>
                              <Td isNumeric>{team['all']['goals']['for']}</Td>
                              <Td isNumeric>--</Td>
                              <Td isNumeric>--</Td>
                              <Td isNumeric>{team['all']['goals']['against']}</Td>
                              <Td isNumeric>--</Td>
                              <Td isNumeric>--</Td>
                            </Tr>
                                )})
                                  }
                          </Tbody>
                          
                      </Table>
                  </SimpleGrid>       
              </ChakraProvider>);
  
}
