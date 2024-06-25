import { Link } from 'react-router-dom';
import { Input, useDisclosure, Button } from '@chakra-ui/react';
import { AddIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Collapse } from '@chakra-ui/react';
//const { SubMenu } = Menu;

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import React, { FC } from 'react';

export interface INavigation {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  placement: any;
  btnRef: React.MutableRefObject<HTMLButtonElement | undefined>;
}

const Navigation: FC<INavigation> = ({
  isOpen,
  onClose,
  btnRef,
  placement,
}) => {
  return (
    <nav>
      <Drawer
        placement={placement}
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};
export default Navigation;
