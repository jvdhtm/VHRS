import { ReactComponent as Logo } from '../logo.svg';
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuList, MenuItem,IconButton, useDisclosure,Button } from '@chakra-ui/react';
import { AddIcon, HamburgerIcon} from '@chakra-ui/icons';
import { Collapse } from '@chakra-ui/react'
import { FC } from "react";
//const { SubMenu } = Menu;
export interface IHeader {
  isMoblie:boolean
  collapsed:boolean
  toggleCollapse: () => void
}
const Header:FC<IHeader> = ({isMoblie, collapsed,toggleCollapse}) => {
  const { isOpen,onToggle } = useDisclosure()
  return (
    <header>
     <Button onClick={onToggle}>Click Me</Button>
       <Collapse in={isOpen} animateOpacity>
        <div className='logo'>
          <Logo />
        </div>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
          />
          <MenuList>
            <MenuItem icon={<AddIcon />} command='⌘T'>
                <Link to="/logout" >
                  Log out 
                </Link> 
            </MenuItem>
          </MenuList>
        </Menu>
      </Collapse>
    </header>
  );
}
export default Header;
