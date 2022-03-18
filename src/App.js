import React from 'react';
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

function fetchInfo() {
  
}


function App() {
  function PasswordInput() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  }
  return (
    <ChakraProvider theme={theme} >
      <Flex alignItems='center' justifyContent='center' height='60vh' bgGradient='linear(to-r, #3a0ca3, #b5179e)'>
        <Box border="4px" borderRadius="md" borderColor="gray.200"  _hover={{bgGradient: 'linear(to-r, red.500, yellow.500)',}} >
            <Heading padding={4} color='white' >Log in</Heading>
            <Input placeholder='Email' variant='outline' bg='white' borderColor='#9FA0FF' />
          </Box>

      
      </Flex>
    
    </ChakraProvider>
  );
}

export default App;
