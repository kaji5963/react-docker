import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import { MenuIconButton } from '../Atoms/button/MenuIconButton';
import { MenuDrawer } from '../molecules/MenuDrawer';

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  return (
    <>
      <Flex
        as="nav"
        bg="blue.300"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 5, md: 3 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            Matching App
          </Heading>
        </Flex>
        <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: 'none', md: 'flex' }}>
          <Box pr={4} onClick={() => navigate('/')}>
            HOME
          </Box>
          <Box pr={4} onClick={() => navigate('/search')}>
            SEARCH
          </Box>
          <Box pr={4} onClick={() => navigate('/myProfile')}>
            MyProfile
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>

      <MenuDrawer onClose={onClose} isOpen={isOpen} navigate={navigate} />
    </>
  );
});
