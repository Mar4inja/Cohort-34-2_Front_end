//Interface nachalnogo sostojanie

import Action from "./counter.Actions";

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
        case 'counter/minus':
            return { ...state, value: state.value - 1 };
        case "counter/plus":
            return { ...state, value: state.value + 1 };
        case "counter/reset":
            return { ...state, value: 0 };
        case "counter/change":
            return { ...state, value: action.payload };
        // case "counter/plus10":
        //     return { ...state, value: state.value + 10 };                                            первый вариант с двумя action
        // case "counter/minus10": 
        //     return { ...state, value: state.value - 10 };
            case "counter/plusMinus10":
                return { ...state, value: state.value + action.payload };                                  // второй вариант с одним action
        default:
            return state;
    }
}
