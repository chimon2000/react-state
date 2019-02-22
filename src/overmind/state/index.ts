import { Overmind, IConfig } from "overmind";
import { createHook } from "overmind-react";
import { state } from "./state";
import * as actions from "./actions";

const config = { state, actions };

declare module "overmind" {
  interface Config extends IConfig<typeof config> {}
}

export const overmind = new Overmind(config, {
  devtools: "penguin.linux.test:3031" // 'localhost:3031'
});

export const useOvermind = createHook(overmind);
