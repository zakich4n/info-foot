import React, {Component} from 'react';
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
  Box
} from '@chakra-ui/react';
import axios from 'axios';

const Header =() =>  {
    return (
            <ChakraProvider theme={theme} >
                <SimpleGrid columns={12}>
                    <Box textAlign="center">
                        <Image  borderRadius='full' objectFit='cover'  boxSize='100px' alt='Premier League' src='https://media.api-sports.io/football/leagues/39.png' /> 
                        <Heading size='sm'>Premier League</Heading>
                    </Box>
                    <Box textAlign="center">
                        <Image  borderRadius='full' objectFit='cover'  boxSize='100px' alt='Championship' src='https://media.api-sports.io/football/leagues/40.png' />
                        <Heading size='sm'>Championship</Heading>
                    </Box>
                    <Box textAlign="center">
                        <Image  borderRadius='full' objectFit='cover'  boxSize='100px' alt='Ligue 1' src='https://media.api-sports.io/football/leagues/61.png' />
                        <Heading size='sm'>Ligue 1</Heading>
                    </Box>
                    <Box textAlign="center">
                    <Image  borderRadius='full' objectFit='cover'  boxSize='100px' alt='Ligue 2' src='https://media.api-sports.io/football/leagues/62.png' />
                        <Heading size='sm'>Ligue 2</Heading>
                    </Box>
                    <Box textAlign="center">
                    <Image  borderRadius='full' objectFit='cover'  boxSize='100px' alt='La Liga' src='https://media.api-sports.io/football/leagues/140.png' />
                        <Heading size='sm'>La Liga</Heading>
                    </Box>
                    <Box textAlign="center">
                    <Image  borderRadius='full' objectFit='cover'  boxSize='100px' alt='Serie A' src='https://media.api-sports.io/football/leagues/135.png' />
                        <Heading size='sm'>Serie A</Heading>
                    </Box>
                    <Box textAlign="center">
                    <Image  borderRadius='full' objectFit='cover'  boxSize='100px' alt='Bundesliga 1' src='https://media.api-sports.io/football/leagues/78.png' />
                        <Heading size='sm'>Bundesliga 1</Heading>
                    </Box>
                    <Box textAlign="center">
                    <Image  borderRadius='full' objectFit='cover'  boxSize='100px' alt='Bundesliga 2' src='https://media.api-sports.io/football/leagues/79.png' />
                        <Heading size='sm'>Bundesliga 2</Heading>
                    </Box>
                    <Box textAlign="center">
                    <Image  borderRadius='full' objectFit='cover'  boxSize='100px' alt='Jupiler Pro League' src='https://media.api-sports.io/football/leagues/144.png' />
                        <Heading size='sm'>Jupiler Pro League</Heading>
                    </Box>
                    <Box textAlign="center">
                    <Image  borderRadius='full' objectFit='cover'  boxSize='100px' alt='Super League' src='https://media.api-sports.io/football/leagues/197.png' />
                        <Heading size='sm'>Super League</Heading>
                    </Box>
                    <Box textAlign="center">
                    <Image  borderRadius='full' objectFit='cover'  boxSize='100px' alt='Super Lig' src='https://media.api-sports.io/football/leagues/203.png' />
                        <Heading size='sm'>Super Lig</Heading>
                    </Box>
                    <Box textAlign="center">
                    <Image  borderRadius='full' objectFit='cover'  boxSize='100px' alt='Eredivisie' src='https://media.api-sports.io/football/leagues/88.png' />
                        <Heading size='sm'>Eredivisie</Heading>
                    </Box>

                </SimpleGrid>
            </ChakraProvider>
        );
}

export default Header;
