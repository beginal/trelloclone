import React from 'react';
import styled from '@emotion/styled';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const Box = styled.div`
  margin-bottom:8px;
`

const TrelloCard = ({text}) => {
  return (
    <Box>
     <Card>
       <CardContent>

        <Typography 
        color="textSecondary" 
        gutterBottom
        >
          {text}
        </Typography>
        </CardContent>
    </Card>
    </Box>
  )
}

export default TrelloCard;