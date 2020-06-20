import React from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import TrelloList from './TrelloList';
import TrelloActionButton from "./TrelloActionButton";
import { sort } from '../actions'


const TrelloBox = styled.div`
  display: flex;
  flex-direction: row;
`

const App = () => {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
      if(!destination) {
        return;
      }
  
      dispatch(sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      ))
  };
  
  const lists = useSelector(store => store.lists)
  return(
    <DragDropContext onDragEnd={onDragEnd}>
    <div>
      <h2>Trello</h2>
      <TrelloBox>
      {lists.map(list => (
        <TrelloList className="lists"
        listID={list.id} 
        key={list.id} 
        title={list.title} 
        cards={list.cards} 
        />
        ))}
        <TrelloActionButton list />
      </TrelloBox>
    </div>
    </DragDropContext>
  )
}

export default App;