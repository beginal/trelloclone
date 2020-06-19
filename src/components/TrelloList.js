import React from 'react';
import styled from '@emotion/styled';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
const Box = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  margin-right:8px;
  height: 100%;
`

const TrelloList = ({title, cards}) => {
  return (
    <Box>
      <h4>{title}</h4>
      {cards.map(card => <TrelloCard key={card.id} text={card.text} />)}
      <TrelloActionButton />
    </Box>
  )
}

export default TrelloList;