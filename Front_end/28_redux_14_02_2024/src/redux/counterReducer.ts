import Action from "./counterActions";

interface ICounterState {
  value: number;
}

const initialState: ICounterState = {
  value: 0,
};

export default function counterReducer(
  state = initialState,
  action: Action
): ICounterState {
  switch (action.type) {
    case "counter/minus10":
      return { ...state, value: state.value - 10 };
    case "counter/minus":
      return { ...state, value: state.value - 1 };
    case "counter/plus":
      return { ...state, value: state.value + 1 };
    case "counter/plus10":
      return { ...state, value: state.value + 10 };
    case "counter/plus10&minus10":
      // return { ...state, value: action.payload ? state.value + 10 : state.value - 10}
      return { ...state, value: state.value + (action.payload ? 10 : -10)};
    case "counter/reset":
      return { ...state, value: 0 };
    case "counter/change":
      return { ...state, value: action.payload}
    default:
      return state;
  }
}