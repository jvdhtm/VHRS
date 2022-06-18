import { Card } from '../components'
import  Admin from '../layouts/Admin'
import {
  Grid,
  GridItem
} from '@chakra-ui/react';


const Dashboard = () => {
    return (
      <Admin>


        <Grid
          w='100vw' h="calc(100vh - var(--headerHeight))"
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={4}
        >
          <GridItem rowSpan={2} colSpan={1} bg='tomato' />
          <GridItem colSpan={2} bg='papayawhip' />
          <GridItem colSpan={2} bg='papayawhip' />
          <GridItem colSpan={4} bg='tomato' />
        </Grid>
      </Admin>
    )
}
  
export default Dashboard