import React from 'react';
import {
  ChakraProvider, SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption
} from '@chakra-ui/react';
import Header from './components/header.jsx';
import FootballClub from './components/football_club.jsx';
//import League from './components/league.jsx';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useLocation
} from "react-router-dom";



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
  console.log(query.toString());
  league_id=query.get("id");

  useEffect(() => {
    console.log("The League istance is refreshed with ID : "+league_id);
  }, [league_id])
  /*options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/leagues',
      params: {
          //season : 2022,
          //search : 'turkey'
          //code: 'NL'
          id: league_id
      },
      headers: {
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
      'X-RapidAPI-Key': '91eeb26ed8msh8447d341df76518p1a7653jsna3db505351af'
      }
  }*/


  /*
  constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        league: {},
        id: this.props.league_id
      };
  }*/

  /*
  componentDidMount(){
      axios.request(this.options).then((response) => {
          this.setState({
              league:response.data,
              error: false
          })
          console.log(response.data);
          console.log(response.status);
      }
      ).catch(function (error) {
          this.error=true;
          console.error(error);
      });
  }
  */
  
      //const {league, id} = this.state
      
      
      return (<ChakraProvider>
                  <SimpleGrid spacing='40px'>
                              
                      <Table variant='striped' colorScheme='teal' size='sm'>
                          <TableCaption>Equipe de la ligue {league_id}</TableCaption>
                          <Thead>
                          <Tr>
                              <Th>Equipe</Th>
                              <Th>V</Th>
                              <Th>N</Th>
                              <Th>D</Th>
                              <Th isNumeric>But marqués</Th>
                              <Th isNumeric>1ere MT</Th>
                              <Th isNumeric>2eme MT</Th>
                              <Th isNumeric>Buts encaissés</Th>
                              <Th isNumeric>1ere MT</Th>
                              <Th isNumeric>2eme MT</Th>
                          </Tr>
                          </Thead>
                          <Tbody>
                          <Tr>
                              <Td>Nom Equipe</Td>
                              <Td>3</Td>
                              <Td>2</Td>
                              <Td>1</Td>
                              <Td isNumeric>22</Td>
                              <Td isNumeric>9</Td>
                              <Td isNumeric>13</Td>
                              <Td isNumeric>15</Td>
                              <Td isNumeric>6</Td>
                              <Td isNumeric>9</Td>
                          </Tr>
                          <Tr>
                              <Td>Nom Equipe</Td>
                              <Td>3</Td>
                              <Td>2</Td>
                              <Td>1</Td>
                              <Td isNumeric>22</Td>
                              <Td isNumeric>9</Td>
                              <Td isNumeric>13</Td>
                              <Td isNumeric>15</Td>
                              <Td isNumeric>6</Td>
                              <Td isNumeric>9</Td>
                          </Tr>
                          <Tr>
                              <Td>Nom Equipe</Td>
                              <Td>3</Td>
                              <Td>2</Td>
                              <Td>1</Td>
                              <Td isNumeric>22</Td>
                              <Td isNumeric>9</Td>
                              <Td isNumeric>13</Td>
                              <Td isNumeric>15</Td>
                              <Td isNumeric>6</Td>
                              <Td isNumeric>9</Td>
                          </Tr>
                          </Tbody>
                      </Table>
                      
                  </SimpleGrid>       
              </ChakraProvider>);
  
}
