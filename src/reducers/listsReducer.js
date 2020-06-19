const initialState = [
  {
    title: "I Can Do",
    id: 0,
    cards: [
      {
        id: 0,
        text: "트렐로 만들기"
      },
      {
        id: 1,
        text: "트렐로 진행상황"
      }
    ]
  },
  {
    title: "To do",
    id: 1,
    cards: [
      {
        id: 0,
        text: "진행중인 사항"
      },
      {
        id: 1,
        text: "진행상황 정리"
      },
      {
        id: 2,
        text: "한개 더"
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch(action.type) {
    default: return state;
  }
}


export default listsReducer;