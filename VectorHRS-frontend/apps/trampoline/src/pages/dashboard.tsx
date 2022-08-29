import { NewsLetter } from '../components'
import  Admin from '../layouts/Admin'
import resources from "@vhrs/resources";
import { FC } from "react";
import {
  Grid,
  Heading,
  GridItem
} from '@chakra-ui/react';
import DepartmentICon from "../components/DepartmentICon";
const DepartmentProvider = resources.contexts.DepartmentProvider;
const NewsletterProvider = resources.contexts.NewsletterProvider;

const Dashboard:FC = ()=>{

    return (
      <DepartmentProvider headers={""}>
        <NewsletterProvider headers={""}>
        <Admin>
        <div className="container">
            <Grid
              w='100%' h="calc(100vh - var(--headerHeight))"
              templateRows='repeat(2, 1fr)'
              templateColumns='repeat(12, 1fr)'
              gap={4}
            >
              <GridItem className="sidebar" />
              <GridItem className="content"  >
                <Heading as='h1' size='4xl' noOfLines={1}>
                    Overview
                </Heading>
                  <Heading as='h2' size='lg' noOfLines={1}>
                    News
                </Heading>
                <NewsLetter/>
              </GridItem>
            </Grid>
            </div>
        </Admin>
        </NewsletterProvider>
      </DepartmentProvider>
    )
}
  
export default Dashboard