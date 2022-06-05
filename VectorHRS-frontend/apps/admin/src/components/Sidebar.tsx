
import { Link } from 'react-router-dom';
import { Input, useDisclosure,Button } from '@chakra-ui/react';
import { AddIcon, HamburgerIcon} from '@chakra-ui/icons';
import { Collapse } from '@chakra-ui/react'
//const { SubMenu } = Menu;

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import React from 'react';

function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>()

  return (
    <nav>

    </nav>
  )
}
export default Navigation;
