import React from 'react';
import TrelloList from './TrelloList';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import TrelloActionButton from "./TrelloActionButton";

const TrelloBox = styled.div`
  display: flex;
  flex-direction: row;
`

const App = () => {
  const lists = useSelector(store => store.lists)
  return(
    <div>
      <h2>hehe</h2>
      <TrelloBox>
      {lists.map(list => (
        <TrelloList key={list.id} title={list.title} cards={list.cards} />
        ))}
        <TrelloActionButton list />
      </TrelloBox>
    </div>
  )
}

export default App;