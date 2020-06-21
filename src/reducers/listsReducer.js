import { CONSTANTS } from '../actions';

let listId = 2;
let cardId = 5;

const initialState = [
  {
    title: "I Can Do",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "트렐로 만들기"
      },
      {
        id: `card-${1}`,
        text: "트렐로 진행상황"
      }
    ]
  },
  {
    title: "To do",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "진행중인 사항"
      },
      {
        id: `card-${3}`,
        text: "진행상황 정리"
      },
      {
        id: `card-${4}`,
        text: "한개 더"
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch (action.type) {

    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listId}`
      }
      listId += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      {
        const newCard = {
          text: action.payload.text,
          cards: [],
          id: `list-${cardId}`
        }
        cardId += 1;
        const newState = state.map(list => {
          if (list.id === action.payload.cardID) {
            return {
              ...list,
              cards: [...list.cards, newCard]
            }
          } else {
            return list;
          }
        });

        return newState;
      }
    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        dropgableId,
        type
      } = action.payload;
      const newState = [...state];

      if(type === 'list') {
        const list = newState.splice(droppableIndexStart, 1)
        newState.splice(droppableIndexEnd, 0, ...list)
        return newState;
      }

      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id)
        const card = list.cards.splice(droppableIndexStart, 1)
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      if(droppableIdStart !== droppableIdEnd) {
        const listStart = state.find(list => droppableIdStart === list.id)
        const card = listStart.cards.splice(droppableIndexStart,1);
        const listEnd = state.find(list => droppableIdEnd === list.id);

        listEnd.cards.splice(droppableIndexEnd, 0, ...card)
      }
      return newState;

    default: return state;
  }
}


export default listsReducer;