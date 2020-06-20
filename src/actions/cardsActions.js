import { CONSTANTS } from '../actions'; 

export const addCard = (cardID, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: {text, cardID}
  };
};

