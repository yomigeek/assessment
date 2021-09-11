import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Card from '../../components/Card';

const ListBox = styled.div`
  padding: 20px;
  min-height: 300px;
  display: flex;
  flex-wrap: wrap;
`;

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <ListBox>
          <Card
            title='ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing'
            name='Yomi olao'
            summary='Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.'
            imgSrc='https://robohash.org/consequatursiteligendi.bmp?size=50x50&set=set1'
          />
           <Card
            title='ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing'
            name='Yomi olao'
            summary='Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.'
            imgSrc='https://robohash.org/consequatursiteligendi.bmp?size=50x50&set=set1'
          />
          <Card
            title='ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing'
            name='Yomi olao'
            summary='Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.'
            imgSrc='https://robohash.org/consequatursiteligendi.bmp?size=50x50&set=set1'
          /><Card
          title='ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing'
          name='Yomi olao'
          summary='Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.'
          imgSrc='https://robohash.org/consequatursiteligendi.bmp?size=50x50&set=set1'
        /><Card
        title='ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing'
        name='Yomi olao'
        summary='Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.'
        imgSrc='https://robohash.org/consequatursiteligendi.bmp?size=50x50&set=set1'
      />
        </ListBox>
      </Container>
    </>
  );
};

export default Home;
