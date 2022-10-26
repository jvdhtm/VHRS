import { NewsLetter, Questions, Shortcuts } from '../components';
import Admin from '../layouts/Admin';
import resources from '@vhrs/resources';
import { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const DepartmentProvider = resources.contexts.DepartmentProvider;
const NewsletterProvider = resources.contexts.NewsletterProvider;
const NewsrelatedlinkProvider = resources.contexts.NewsrelatedlinkProvider;
const QuestionsProvider = resources.contexts.QuestionProvider;

const News: FC = () => {
  const params = useParams();
  const newsID = params.id
  return (
    <DepartmentProvider headers={''}>
      <NewsrelatedlinkProvider headers={''}>
        <QuestionsProvider headers={''}>
          <NewsletterProvider headers={''}>
            <Admin>
              <Heading as='h1' size='lg' noOfLines={1}>
                News
              </Heading>

              <div className='grid'>
                <div className='main-content'>
                  {newsID ? <NewsLetter id={newsID} /> : ''}
                </div>
                <div className='sidebox'>
                  <Shortcuts />
                  <Questions />
                  <Shortcuts />
                </div>
              </div>
            </Admin>
          </NewsletterProvider>
        </QuestionsProvider>
      </NewsrelatedlinkProvider>
    </DepartmentProvider>
  );
};

export default News;
