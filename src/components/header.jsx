import React, {Component} from 'react';
import {
  ChakraProvider,
  Button,
  SimpleGrid,
  Flex,
  theme,
  Heading
} from '@chakra-ui/react';
import axios from 'axios';

class Header extends Component  {
    state = {};
    render() {
        return (
            <ChakraProvider theme={theme} >
                <Flex alignItems='center' justifyContent='center' height='10vh' bg='teal.50'>
                    <SimpleGrid spacing='40px' columns={[2, null, 3]}>
                    <Button colorScheme='cyan'>
                        Button
                    </Button>
                    <Button colorScheme='cyan'>
                        Button
                    </Button>
                    <Button colorScheme='cyan'>
                        Button
                    </Button>
                    </SimpleGrid>
                </Flex>
            </ChakraProvider>
        );
    }
}

export default Header;
