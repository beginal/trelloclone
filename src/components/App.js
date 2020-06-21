import React from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TrelloList from './TrelloList';
import TrelloActionButton from "./TrelloActionButton";
import { sort } from '../actions'


const TrelloBox = styled.div`
  display: flex;
  flex-direction: row;
  > div {
    height:100%;
  }
`

const App = () => {
  const dispatch = useDispatch();

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }

    dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    ))
  };

  const lists = useSelector(store => store.lists)
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <h2>Trello</h2>
        <Droppable  droppableId="all-lists" direction="horizontal" type="list" >
          {provided => (
            <TrelloBox {...provided.droppalbeProps} ref={provided.innerRef}>
              {lists.map(({id,title,cards},index) => (
                <TrelloList  className="lists"
                  listID={id}
                  key={id}
                  title={title}
                  cards={cards}
                  index={index}
                />
              ))}
              <TrelloActionButton list />
            </TrelloBox>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  )
}

export default App;