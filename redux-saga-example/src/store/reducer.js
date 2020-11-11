const initialState = {
  counter: 18,
  text:"Hello world!",
  title: "Hi there"
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "INCREMENT_ASYNC":
      newState.counter += action.value;
      break;
    case "DECREMENT_ASYNC":
      newState.counter -= action.value;// redux saga, handles async actions
      break;
    case "TEXT":
        newState.text += "!"
        break;
    case "TITLE":
        newState.title += 1;//redux value gets ignored
        break;
    default:
        return state;
  }
  return newState;
};

export default reducer;
