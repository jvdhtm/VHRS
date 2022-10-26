import { NewsList, Questions, Shortcuts } from '../components';
import Admin from '../layouts/Admin';
import resources from '@vhrs/resources';
import { FC } from 'react';
import { Heading } from '@chakra-ui/react';

const DepartmentProvider = resources.contexts.DepartmentProvider;
const NewsletterProvider = resources.contexts.NewsletterProvider;
const NewsrelatedlinkProvider = resources.contexts.NewsrelatedlinkProvider;
const QuestionsProvider = resources.contexts.QuestionProvider;

const Dashboard: FC = () => {
  return (
    <DepartmentProvider headers={''}>
      <NewsrelatedlinkProvider headers={''}>
      <QuestionsProvider headers={''}>
      <NewsletterProvider headers={''}>
        <Admin>
          <Heading as='h1' size='lg' noOfLines={1}>
            Overview
          </Heading>

          <div className='grid'>
            <div className='main-content'>
              <NewsList />
            </div>
            <div className='sidebox' >
              <Shortcuts/>
              <Questions />
              <Shortcuts/>
            </div>
          </div>
        </Admin>
   
        </NewsletterProvider>
        </QuestionsProvider>
        </NewsrelatedlinkProvider>
    </DepartmentProvider>
  );
};

export default Dashboard;
