const initialState = {
  counter: 18,
  text:"Hello world!"
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "INCREMENT_ASYNC":
      newState.counter += action.value;
      break;
    case "DECREMENT_ASYNC":
      newState.counter -= action.value;
      break;
    case "TEXT":
        newState.text += "!"
        break;
    default:
        return state;
  }
  return newState;
};

export default reducer;
