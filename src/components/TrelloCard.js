import React from 'react';
import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { Draggable } from 'react-beautiful-dnd';

const Box = styled.div`
  margin-bottom:6px;
  .card {
    padding: 8px;
    &:last-child {
      padding-bottom: 16px;
    }
    * {
      color: black;
    }
  }
`

const TrelloCard = ({ text, id, index }) => {
  // const dragRef = useRef(provided.innerRef)
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <Box 
        ref={provided.innerRef} 
        {...provided.draggableProps} 
        {...provided.dragHandleProps}>
          <Card >
            <CardContent className='card'>
              <Typography 
                color="textSecondary"
                gutterBottom
              >
                {text}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )}

    </Draggable>
  )
}

export default TrelloCard;