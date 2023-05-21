import { FC, memo } from 'react';
import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import { NavigateFunction } from 'react-router-dom';

type Props = {
  onClose: () => void;
  isOpen: boolean;
  navigate: NavigateFunction;
};

export const MenuDrawer: FC<Props> = memo(({ onClose, isOpen, navigate }) => {
  const homeNavigate = () => {
    navigate('/match');
    onClose();
  };

  const searchNavigate = () => {
    navigate('/search');
    onClose();
  };

  const myProfileNavigate = () => {
    navigate('/myProfile');
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
