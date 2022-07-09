import { Departments } from '../components'
import  Admin from '../layouts/Admin'
import resources from "@vhrs/resources";
import { Idepartment } from "@vhrs/resources/types/context";
import { FC, useContext, useEffect } from "react";
import {
  Grid,
  Heading,
  GridItem
} from '@chakra-ui/react';

const DepartmentProvider = resources.contexts.DepartmentProvider;


const Dashboard:FC = ()=>{

    return (
      <DepartmentProvider headers={""}>
        <Admin>
            <Grid
              w='100vw' h="calc(100vh - var(--headerHeight))"
              templateRows='repeat(2, 1fr)'
              templateColumns='repeat(5, 1fr)'
              gap={4}
            >
              <GridItem rowSpan={2} colSpan={1}>
                  <Heading as='h1' size='4xl' noOfLines={1}>
                    <Departments/>
                </Heading>
              </GridItem>
              <GridItem colSpan={2} bg='papayawhip' >
                  <Heading as='h2' size='4xl' noOfLines={1}>
                    ShortCuts
                </Heading>
              </GridItem>
              <GridItem colSpan={2} bg='papayawhip' >
                  <Heading as='h2' size='4xl' noOfLines={1}>
                    ShortCuts
                </Heading>
              </GridItem>
              <GridItem colSpan={4} bg='papayawhip' >
                  <Heading as='h2' size='4xl' noOfLines={1}>
                    News
                </Heading>
              </GridItem>
            </Grid>
        </Admin>
      </DepartmentProvider>
    )
}
  
export default Dashboard