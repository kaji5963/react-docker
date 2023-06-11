import { FC, memo } from 'react';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react';

import { NavigateFunction, useLocation } from 'react-router-dom';

type Props = {
  onClose: () => void;
  isOpen: boolean;
  navigate: NavigateFunction;
};

export const MenuDrawer: FC<Props> = memo(({ onClose, isOpen, navigate }) => {
  const location = useLocation(); // location.search = ？api_token=""

  const homeNavigate = () => {
    navigate(`/match${location.search}`);
    onClose();
  };

  const searchNavigate = () => {
    navigate(`/search${location.search}`);
    onClose();
  };

  const myProfileNavigate = () => {
    navigate(`/myProfile${location.search}`);
    onClose();
  };

  return (
    <>
      <Drawer placement="left" size="xs" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%" onClick={homeNavigate}>
                MATCH
              </Button>
              <Button w="100%" onClick={searchNavigate}>
                SEARCH
              </Button>
              <Button w="100%" onClick={myProfileNavigate}>
                MyProfile
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});
