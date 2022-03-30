import {
    ChakraProvider,
    Button,
    SimpleGrid,
    Flex,
    Text,
    theme,
    Heading,
    Image,
    Grid,
    Stack,
    Center,
    Box,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption
  } from '@chakra-ui/react';
import React, {Component} from 'react';
import { useState } from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useLocation
  } from "react-router-dom";



  
  
function League ({league_id}) {
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
        X-RapidAPI-Host: api-football-v1.p.rapidapi.com
        X-RapidAPI-Key: 91eeb26ed8msh8447d341df76518p1a7653jsna3db505351af
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
        console.log(league_id);
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

export default League;
