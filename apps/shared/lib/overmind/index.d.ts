import { Overmind, IConfig } from 'overmind';
import * as actions from './state/actions';
export declare const config: {
    state: import("./state/state").State;
    actions: typeof actions;
};
declare module 'overmind' {
    interface Config extends IConfig<typeof config> {
    }
}
export declare const overmind: Overmind<{
    state: import("./state/state").State;
    actions: typeof actions;
}>;
export { State } from './state/state';
