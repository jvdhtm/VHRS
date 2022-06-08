import { ReactComponent as Logo } from '../logo.svg';
import { Link } from 'react-router-dom';
import { Menu, MenuButton, MenuList, MenuItem,IconButton, useDisclosure,Button } from '@chakra-ui/react';
import {  SettingsIcon, HamburgerIcon} from '@chakra-ui/icons';
import { Icon, createIcon } from '@chakra-ui/react'
import { Collapse } from '@chakra-ui/react'
import { FC } from "react";
//const { SubMenu } = Menu;
export interface IHeader {
  isMoblie:boolean
  collapsed:boolean
  toggleCollapse: () => void
}

const ExitICon:FC = ()=>{
  return <Icon viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
          <g><path  fill='currentColor' d="M192.4,873.8c1.9,0,3.8,0,5.7,0L192.4,873.8z M762.8,873.8l-5.8,0C759,873.8,760.9,873.8,762.8,873.8z M898.4,732.8c-25.8,0-46.8,20.9-46.8,46.7l0.1,16.4c-2.3,60.3-20.1,77-88.9,77.8l88.5-0.6l0.4-60.2l0.2,60.9l-748,0.4v-1l88.5,0.6c-65.5-0.8-84.8-15.9-88.5-69.4l-0.3-628.1l1.1,43c0-68.8,11.9-90.1,75.2-93.1l586.9-0.3c65.6,1.4,82.8,18.6,85,77.7l-0.1,16.3c0,25.8,20.9,46.7,46.8,46.7c25.8,0,46.8-20.9,46.8-46.7l0.1-47.4h-0.2v-46.7c0-51.2-41.2-92.7-92.2-93.5L94.7,32.7c-47.1,4.4-84,43.6-84.7,91.6l0.4,758.2c4.4,47.5,44.4,84.7,93.1,84.7h49.7v0.4l698.5-0.4c51.6,0,93.5-41.9,93.5-93.5V827h0.2l-0.1-47.4C945.2,753.8,924.3,732.8,898.4,732.8L898.4,732.8z M851.9,125.8l-0.2,60.8l-0.4-60.2l-78.9-0.5L851.9,125.8L851.9,125.8z M103.5,126.2l28.7,0l-28.7,0.2V126.2L103.5,126.2z M976.3,465c-2.8-2.8-5.9-5.2-9.1-7.1L787.7,277.6c-18.3-18.3-47.9-18.3-66.1,0c-18.3,18.3-18.3,47.9,0,66.1l109.3,109.8l-494.2-0.4c-25.8,0-46.8,20.9-46.8,46.7c0,25.8,20.9,46.8,46.8,46.8l492,0.4L721.5,654.4c-18.3,18.3-18.3,47.9,0,66.1c18.3,18.3,47.9,18.3,66.1,0l179.6-180.3c3.3-1.9,6.3-4.3,9.1-7.1c9.4-9.4,13.9-21.8,13.7-34.1C990.3,486.8,985.7,474.4,976.3,465L976.3,465z"/></g>
        </Icon>
}

const Header:FC<IHeader> = ({isMoblie, collapsed,toggleCollapse}) => {
  const { isOpen,onToggle } = useDisclosure()
  return (
    <header>
        <div className='logo'>
          <Logo />
        </div>
        <Menu>
          <MenuButton
            className='show-menu'
            as={IconButton}
            aria-label='Options'
            icon={<HamburgerIcon />}
            variant='outline'
          />
          <MenuList>
          <MenuItem icon={<SettingsIcon />} command='⌘P'>
                <Link to="/profile" >
                  profile 
                </Link> 
            </MenuItem>
            <MenuItem icon={<ExitICon />} command='⌘T'>
                <Link to="/logout" >
                  Log out 
                </Link> 
            </MenuItem>

          </MenuList>
        </Menu>
    </header>
  );
}
export default Header;
