import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
import React, {Component} from 'react';
import { useState } from 'react';
import axios from 'axios';
  

class FootballClub extends Component {
    options = {
        method: 'GET',
        url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
        params: {id: this.props.club_id},
        headers: {
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '91eeb26ed8msh8447d341df76518p1a7653jsna3db505351af'
        }
    }
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          team: {}
        };
    }

    componentDidMount(){
        axios.request(this.options).then((response) => {
            this.setState({
                team:response.data,
                error: false
            })
            console.log(this.props);
        }
        ).catch(function (error) {
            this.error=true;
            console.error(error);
        });
    }
    
    
    render() {
        const {team} = this.state;
        console.log(typeof team['response'] === 'undefined' ? "No data yet..." : team);

        //still loading
        if (typeof team['response'] === 'undefined') {
            return (
                <Center py={6}>
                    <Box
                        maxW={'270px'}
                        w={'full'}
                        bg='gray.800'
                        boxShadow={'2xl'}
                        rounded={'md'}
                        overflow={'hidden'}>
                        <Image
                        h={'120px'}
                        w={'full'}
                        src={
                            null
                        }
                        objectFit={'cover'}
                        />
                        <Flex justify={'center'} mt={-12}>
                        <Avatar
                            size={'xl'}
                            src={
                                null
                            }
                            alt={'Author'}
                            css={{
                            border: '2px solid white',
                            }}
                        />
                        </Flex>
                
                        <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                            John Doe
                            </Heading>
                            <Text color={'gray.500'}>{null}</Text>
                        </Stack>
                
                        <Stack direction={'row'} justify={'center'} spacing={6}>
                            <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>23k</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Followers
                            </Text>
                            </Stack>
                            <Stack spacing={0} align={'center'}>
                            <Text fontWeight={600}>23k</Text>
                            <Text fontSize={'sm'} color={'gray.500'}>
                                Followers
                            </Text>
                            </Stack>
                        </Stack>
                
                        <Button
                            w={'full'}
                            mt={8}
                            bg='gray.900'
                            color={'white'}
                            rounded={'md'}
                            _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: 'lg',
                            }}>
                            Follow
                        </Button>
                        </Box>
                    </Box>
                </Center>
            );
        }

        //done loading 
        else {
            return (
                <Center py={6}>
          <Box
            maxW={'270px'}
            w={'full'}
            bg='gray.800'
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}>
            <Image
              h={'120px'}
              w={'full'}
              src={
                team['response'][0]['venue']['image']
              }
              objectFit={'cover'}
            />
            <Flex justify={'center'} mt={-12}>
              <Avatar
                size={'xl'}
                src={
                    team['response'][0]['team']['logo']
                }
                alt={'Author'}
                css={{
                  border: '2px solid white',
                }}
              />
            </Flex>
    
            <Box p={6}>
              <Stack spacing={0} align={'center'} mb={5}>
                <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'} color={'white'}>
                  {team['response'][0]['team']['name']}
                </Heading>
                <Text color={'gray.500'}>{team['response'][0]['venue']['name']}</Text>
              </Stack>
    
              <Stack direction={'row'} justify={'center'} spacing={6}>
                <Stack spacing={0} align={'center'}>
                  <Text fontWeight={600} color={'white'}>23k</Text>
                  <Text fontSize={'sm'} color={'gray.500'}>
                    Followers
                  </Text>
                </Stack>
                <Stack spacing={0} align={'center'}>
                  <Text fontWeight={600} color={'white'}>23k</Text>
                  <Text fontSize={'sm'} color={'gray.500'}>
                    Followers
                  </Text>
                </Stack>
              </Stack>
    
              <Button
                w={'full'}
                mt={8}
                bg='gray.900'
                color={'white'}
                rounded={'md'}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}>
                Follow
              </Button>
            </Box>
          </Box>
        </Center>
            );
        }

        
    }
}

export default FootballClub;