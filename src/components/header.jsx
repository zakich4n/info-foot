import React, {Component} from 'react';
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
  Heading
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

class Header extends Component {
    state = {};
    render() {
        return (
            <ChakraProvider theme={theme} >
                
            </ChakraProvider>
        );
    }
}

export default header;
