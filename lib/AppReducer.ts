import { useReducer } from "react";

interface StateProps {
  theme: "light" | "dark";
}

const initialState: StateProps = {
  theme: "light",
};

function AppReducer(state: StateProps, action: { type: string; payload: any }) {
  switch (action.type) {
    case "SET_THEME":
      return {
        ...state,
        theme: action.payload,
      };
    default:
      console.log("No reducer found");
      return state;
  }
}

export function AppStore() {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return { state, dispatch };
}
