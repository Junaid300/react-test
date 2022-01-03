import { INCREMENT_NUMBER } from "../actions/type";

const initalState = {
  number: 0,
};

export const testReducer = (state = initalState, action) => {
  switch (action.type) {
    case INCREMENT_NUMBER: {
      return state.number + 1;
    }
    default:
      return state.number;
  }
};
