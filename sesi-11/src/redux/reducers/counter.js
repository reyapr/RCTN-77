const defaultState = {
  title: 'Learn Counter',
  value: 10,
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1
      }
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1
      }
    default:
      return state;
  }
};

export default counterReducer;
