import { ChakraProvider, Box, Button, Menu, MenuList, MenuButton, MenuItem, MenuGroup, MenuGroup,
  MenuDivider} from '@chakra-ui/react';
import { PhoneIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { useState } from 'react';

function App() {
 const [isLoading, setIsLoading] = useState(false);

  return (
    <ChakraProvider>
      <Box>Hello, Chakra</Box>
      <Button 
         isLoading={isLoading} 
         colorScheme="cyan" 
         leftIcon={<PhoneIcon/>} 
         variant="solid"
      >
        Call
      </Button>
      <Menu>
        <MenuButton 
            colorScheme="pink" 
            as={Button} 
            rightIcon={<ChevronDownIcon/>}
          >
            Dinner
            </MenuButton>
            <MenuList>
              <MenuGroup title="WestFood">
                 <MenuItem>Hamburger</MenuItem>
                 <MenuItem>Pizza</MenuItem>
                 <MenuItem>Carbonara</MenuItem>
                 <MenuItem>Salad</MenuItem>
              </MenuGroup> 
              <MenuDivider />

            </MenuList>
      </Menu>
    </ChakraProvider>
  )
}

export default App;