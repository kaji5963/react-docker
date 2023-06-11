import { FC, memo } from 'react';
import { Box, Flex, Heading, useDisclosure } from '@chakra-ui/react';
import { MenuIconButton } from '../Atoms/button/MenuIconButton';
import { MenuDrawer } from '../molecules/MenuDrawer';
import { useLogout } from '../../hooks/useLogout';

import { useLocation, useNavigate } from 'react-router-dom';

export const Header: FC = memo(() => {
  const navigate = useNavigate();
  const location = useLocation(); // location.search = ？api_token=""
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { logout } = useLogout();

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
          _hover={{ cursor: 'pointer', color: 'gray.300' }}
          onClick={() => navigate('/')}
        >
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            Matching App
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: 'none', md: 'flex' }}
          _hover={{ cursor: 'pointer' }}
        >
          <Box
            pr={4}
            onClick={() => navigate(`/match${location.search}`)}
            _hover={{ color: 'gray.300' }}
          >
            MATCH
          </Box>
          <Box
            pr={4}
            onClick={() => navigate(`/search${location.search}`)}
            _hover={{ color: 'gray.300' }}
          >
            SEARCH
          </Box>
          <Box
            pr={4}
            onClick={() => navigate(`/myProfile${location.search}`)}
            _hover={{ color: 'gray.300' }}
          >
            PROFILE
          </Box>

          {/* 簡易的なログアウト */}
          <Box pr={4} onClick={() => logout()} _hover={{ color: 'gray.300' }}>
            LOGOUT
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>

      <MenuDrawer onClose={onClose} isOpen={isOpen} navigate={navigate} />
    </>
  );
});
