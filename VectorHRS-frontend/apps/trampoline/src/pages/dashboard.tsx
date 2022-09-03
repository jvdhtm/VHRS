import { NewsLetter ,RelatedLink } from '../components';
import Admin from '../layouts/Admin';
import resources from '@vhrs/resources';
import { FC } from 'react';
import { Heading } from '@chakra-ui/react';

const DepartmentProvider = resources.contexts.DepartmentProvider;
const NewsletterProvider = resources.contexts.NewsletterProvider;

const Dashboard: FC = () => {
  return (
    <DepartmentProvider headers={''}>
      <NewsletterProvider headers={''}>
        <Admin>
          <Heading as='h1' size='lg' noOfLines={1}>
            Overview
          </Heading>

          <div className='grid'>
            <NewsLetter />
            <div className='sidebox' >
              <RelatedLink />
            </div>
          </div>
        </Admin>
      </NewsletterProvider>
    </DepartmentProvider>
  );
};

export default Dashboard;
