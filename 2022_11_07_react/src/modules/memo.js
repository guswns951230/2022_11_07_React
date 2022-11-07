const initialState = {
  memolist: [],
};

export const addmemo = (memo) => ({ type: "addMemo", payload: memo });

const memo = (state = initialState, action) => {
  switch (action.type) {
    case "addMemo":
      console.log(action.payload);
      const newMemo = {
        name: action.payload.name,
        text: action.payload.text,
        date: `${new Date().getMonth() + 1}/${new Date().getDate()}`,
      };
      const newMemoList = state.memolist.concat(newMemo);
      return { ...state, memolist: newMemoList };
    default:
      return state;
  }
};

export default memo;
