import React from 'react';
import styled from '@emotion/styled';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './TrelloActionButton';
import { Droppable } from 'react-beautiful-dnd';
const Box = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  margin-right:8px;
  height: 100%;
  h4 {
    margin: 0 0 10px 0;
  }

`

const TrelloList = ({ title, cards, listID }) => {
  // const dragRef = useRef(provided.innerRef)
  return (
    <Droppable droppableId={String(listID)}>
      {provided => (
        <Box 
        {...provided.droppableProps} 
        ref={provided.innerRef}
        >
          <h4>{title}</h4>
          {cards.map(({id, text}, index) => <TrelloCard className="Tcard" key={id} index={index} text={text} id={id} />)}
          {provided.placeholder}
          <TrelloActionButton listID={listID} />
        </Box>
      )}

    </Droppable>
  )
}

export default TrelloList;