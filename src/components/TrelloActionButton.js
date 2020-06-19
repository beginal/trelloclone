import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Textarea from 'react-textarea-autosize';
const Box = styled.div`
display: flex;
align-items: center;
cursor: pointer;
border-radius: 3px;
height: 36px;
width: 272px;
padding-left: 10px;
 ${props => props.list ?
 css`
    opacity : 1;
    color: white;
    background: rgba(0, 0, 0, .15);
    `
  :
  css`
    opacity: 0.5;
    color: inherit;
    background: inherit;
    `
}
`

const InputText = styled(Card)`
  overflow: visible;
  min-height: 80px;
  min-width: 272px;
  padding: 6px 8px 2px;
    .textarea {    
    width: 100%;
    padding: 0.5rem;
    box-sizing:border-box;
    padding-bottom: 1.2rem;
    outline:none;
    border:none;
    resize:none;
    }
`

const ButtonGroup = styled.div`
  margin-top: 8;
  display: flex;
  align-items:center;
    .addbutton {
    color:white;
    background: #5aac44;
    .close {
    margin-left:0;
    cursor: pointer;
    }
}
    
`

const TrelloActionButton = ({list}) => {
  const [ formOpen, setFormOpen ] = useState(false)
  const [ text, setText ] = useState('')

  const ToggleForm = () => {
    setFormOpen(!formOpen)
  }
  const renderAddButton = () => {
    const buttonText = list ? "Add another list" : "Add another card"
    return ( 
    <Box list={list} onClick={ToggleForm}>
      <Icon>add</Icon>
      <p>{buttonText}</p>
    </Box>
      )
  }
  const handleInputChange = (e) => {
    setText(e.target.value)
  }
  const renderForm = () => {
    const placeholder = list 
    ? "Enter list title..."
    : "Enter a title for this card...";
    const buttonTitle = list
    ? "add List" : "Add Card";
    return <>
      <InputText>
      <Textarea
      className="textarea"
      placeholder={placeholder}
      autoFocus
      onBlur={ToggleForm}
      value={text}
      onChange={handleInputChange}
      />
      </InputText>
      <ButtonGroup>
        <Button className="addbutton" variant="contained">
          {buttonTitle}{" "}
        </Button>
        <Icon className="close" onClick={ToggleForm}>close</Icon>
      </ButtonGroup>
    </>
  };

  return (
    formOpen ?
    renderForm()
    : renderAddButton()
  )
}

export default TrelloActionButton;