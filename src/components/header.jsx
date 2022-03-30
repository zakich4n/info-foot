import React, {Component} from 'react';
import {
  ChakraProvider,
  Button,
  SimpleGrid,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
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
import axios from 'axios';
import {
    Link
  } from "react-router-dom";
import { useDisclosure } from '@chakra-ui/react'


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
    leaguesID : [39, 40, 61, 62, 140, 135, 78, 79, 144, 197, 203, 88],
    Leagues : [
        {id : 39, name:"Premier League"},
        {id:40 ,name:"Championship"},
        {id:61 ,name:"Ligue 1"},
        {id:62 ,name:"Ligue 2"},
        {id:140 ,name:"La Liga"},
        {id:135 ,name:"Serie A"},
        {id:78 ,name:"Bundesliga 1"},
        {id:79 ,name:"Bundesliga 2"},
        {id:144 ,name:"Jupiler Pro League"},
        {id:203 ,name:"Toto Super Lig"},
        {id:88 ,name:"Euredivise"}
    ]
  };

const Header =() =>  {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
            <ChakraProvider theme={theme} >
                <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Select League
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Available Leagues</DrawerHeader>

          <DrawerBody>
            {state.Leagues.map(league => (
                    <Flex alignItems="center" pr="10" key={league['id']}>
                        <Link onClick={onClose} to={"/league?id="+league['id']} size='sm'>
                            <Box borderRadius='lg'  margin='6px' p="10px" bg='teal.100' maxW='sm' display='flex' alignItems='baseline'>
                                <Center>
                                    <Image  borderRadius='full' objectFit='cover'  boxSize='60px' alt='Premier League' src={'https://media.api-sports.io/football/leagues/'+league["id"]+'.png'} /> 
                                    <Text pl="15px"  fontSize='2xl'>{league["name"]}</Text>
                                </Center>
                            </Box>
                        </Link>
                    </Flex>
                    ))}
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
</>
            </ChakraProvider>
        );
}

export default Header;
/*options
<>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Available Leagues</DrawerHeader>

          <DrawerBody>
            {state.Leagues.map(league => (
                        <Flex alignItems="center">
                        <Image  borderRadius='full' objectFit='cover'  boxSize='60px' alt='Premier League' src={'https://media.api-sports.io/football/leagues/'+league["id"]+'.png'} /> 
                        <Link onClick={onClose} to={"/league?id="+league['id']} size='sm'>{league["name"]}</Link>
                    </Flex>
                    ))}
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
</>

                    <Flex alignItems="center">
                        <Image  borderRadius='full' objectFit='cover'  boxSize='60px' alt='Premier League' src='https://media.api-sports.io/football/leagues/{league["id"]}.png' /> 
                        <Link to="/league?id={league["id"]}" size='sm'>{league["name"]}</Link>
                    </Flex>
                    <Box textAlign="center">
                        <Image  borderRadius='full' objectFit='cover'  boxSize='60px' alt='Championship' src='https://media.api-sports.io/football/leagues/40.png' />
                        <Link to="/league?id=40" size='sm'>Championship</Link>
                    </Box>
                    <Box textAlign="center">
                        <Image  borderRadius='full' objectFit='cover'  boxSize='60px' alt='Ligue 1' src='https://media.api-sports.io/football/leagues/61.png' />
                        <Heading size='sm'>Ligue 1</Heading>
                    </Box>
                    <Box textAlign="center">
                    <Image  borderRadius='full' objectFit='cover'  boxSize='60px' alt='Ligue 2' src='https://media.api-sports.io/football/leagues/62.png' />
                        <Heading size='sm'>Ligue 2</Heading>
                    </Box>
                    <Box textAlign="center">
                    <Image  borderRadius='full' objectFit='cover'  boxSize='60px' alt='La Liga' src='https://media.api-sports.io/football/leagues/140.png' />
                        <Heading size='sm'>La Liga</Heading>
                    </Box>
                    <Box textAlign="center">
                    <Image  borderRadius='full' objectFit='cover'  boxSize='60px' alt='Serie A' src='https://media.api-sports.io/football/leagues/135.png' />
                        <Heading size='sm'>Serie A</Heading>
                    </Box>
                    <Box textAlign="center">
                    <Image  borderRadius='full' objectFit='cover'  boxSize='60px' alt='Bundesliga 1' src='https://media.api-sports.io/football/leagues/78.png' />
                        <Heading size='sm'>Bundesliga 1</Heading>
                    </Box>
                    <Box textAlign="center">
                    <Image  borderRadius='full' objectFit='cover'  boxSize='60px' alt='Bundesliga 2' src='https://media.api-sports.io/football/leagues/79.png' />
                        <Heading size='sm'>Bundesliga 2</Heading>
                    </Box>
                    <Box textAlign="center">
                    <Image  borderRadius='full' objectFit='cover'  boxSize='60px' alt='Jupiler Pro League' src='https://media.api-sports.io/football/leagues/144.png' />
                        <Heading size='sm'>Jupiler Pro League</Heading>
                    </Box>
                    <Box textAlign="center">
                    <Image  borderRadius='full' objectFit='cover'  boxSize='60px' alt='Super League' src='https://media.api-sports.io/football/leagues/197.png' />
                        <Heading size='sm'>Super League</Heading>
                    </Box>
                    <Box textAlign="center">
                    <Image  borderRadius='full' objectFit='cover'  boxSize='60px' alt='Super Lig' src='https://media.api-sports.io/football/leagues/203.png' />
                        <Heading size='sm'>Super Lig</Heading>
                    </Box>
                    <Box textAlign="center">
                    <Image  borderRadius='full' objectFit='cover'  boxSize='60px' alt='Eredivisie' src='https://media.api-sports.io/football/leagues/88.png' />
                        <Heading size='sm'>Eredivisie</Heading>
                    </Box>

*/