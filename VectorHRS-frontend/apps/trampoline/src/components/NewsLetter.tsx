import { Flex, Heading, Box } from '@chakra-ui/react';
import resources from '@vhrs/resources';
import { Inewsletter } from '@vhrs/resources/types/context';
import { FC, useContext, useEffect } from 'react';

import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

const NewsLetter: FC<{id: string}> = (props : {id: string}) => {
  const { newsletterData, next } = useContext<Inewsletter>(
    resources.contexts.NewsletterContext,
  );
  const { newsletterReadFuncProp } = useContext<Inewsletter>(
    resources.contexts.NewsletterContext,
  );

  const newsId = parseInt(props.id)
  useEffect(() => {
    newsletterReadFuncProp(newsId);
  }, []);
  
  return (
    <>
      {newsletterData && newsletterData[newsId] ? (
        <Box>
          <Flex
            w='100%'
            p={4}
            color='white'
            alignItems='center'
            position={'relative'}
            borderBottom={'thin solid var(--borderColor)'}
          >
            <Flex w='100%' flexWrap={'wrap'}>
              <Heading
                as='h3'
                size='sm'
                noOfLines={1}
                display='block'
                width={'100%'}
              >
                { newsletterData[newsId] .name ?  newsletterData[newsId] .name : ''}
              </Heading>
              <Box
                color={'var( --black)'}
                paddingLeft='2rem'
                paddingRight='2rem'
              >

                <div class="text area" dangerouslySetInnerHTML={{
                  __html:  newsletterData[newsId].html ?  newsletterData[newsId].html : '',
                }}></div>
              </Box>
            </Flex>


            <ReactQuill
        theme='snow'
        value={newsletterData[newsId].html}
        onChange={setConvertedText}
        style={{minHeight: '300px'}}
      />
          </Flex>
        </Box>
      ) : (
        ''
      )}
    </>
  );
};

export default NewsLetter;
