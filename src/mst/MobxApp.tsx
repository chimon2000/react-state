import React from "react";
import { observer } from "mobx-react";
import { Store, store } from "./store";

type Props = {
  store: Store;
};

const App = observer((props: Props) => (
  <div>
    <h1>Counter</h1>
    <div>{props.store.count}</div>
    <button onClick={props.store.increment}>Increment</button>
  </div>
));

export const MobxApp = () => <App store={store} />;
