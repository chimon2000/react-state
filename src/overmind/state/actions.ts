import { Action } from "overmind";

export const increment: Action = ({ state }) => {
  state.count = state.count + 1;
};
