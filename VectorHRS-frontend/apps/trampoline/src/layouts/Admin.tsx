
import { useContext, useState } from 'react'
import useWindowSize from '../util/resize'
import { Header, Sidebar } from '../components'
import resources from "@vhrs/resources";
import { FC } from "react";
import { Icontent } from '../types';
import type { IAuth } from "@vhrs/resources/types/authContext";
import { Button, Icon, useDisclosure,Link  } from '@chakra-ui/react';
import { Link as ReachLink } from "react-router-dom"
import React from 'react';


const MoreOptions:FC = ()=>{
  return <Icon viewBox="0 0 60 60" enableBackground="new 0 0 1000 1000">
            <g xmlns="http://www.w3.org/2000/svg">
              <path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z"/>
              <path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z"/>
              <path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z"/>
            </g>
        </Icon>
}


const Admin:FC<Icontent> = ({children, ClassName}) => {
  const { isAuth } = useContext<IAuth>(resources.authContext.AuthContext);
  if(!isAuth)
  {
    window.location.href = "/login";
  }

  const [collapsed, setCollapsed] = useState(false)
  const [screenWidth] = useWindowSize()

  const isMoblie = screenWidth < 768

  const toggleCollapse = () => setCollapsed((prev) => !prev)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef<HTMLButtonElement>()


  
  return (
        <>
        <Header ClassName="header" isMoblie={isMoblie} toggleCollapse={toggleCollapse} collapsed={collapsed} >
          <>
            <Button ref={btnRef} onClick={onOpen}  variant='ghost' colorScheme='gray'>
              <Icon as={MoreOptions} w={5} h={5}  color='white'/>
              <span className='title'>more options</span>
              <span className='sr-only'>more options</span>
            </Button>
            <nav>
              <Link as={ReachLink} to='/'>
                Home
              </Link>
              <Link as={ReachLink} to='/boards'>
                Boards
              </Link>
              <Link as={ReachLink} to='/boards'>
                Graphs
              </Link>
            </nav>
          </>
        </Header>
        <main>
          <>
          <Sidebar isOpen={isOpen}  onOpen={onOpen} onClose={onClose}  btnRef={btnRef} placement="left"/>
          <div className="main">
            {children}
          </div>
          </>
        </main>
        </>
  )
}

export default Admin;