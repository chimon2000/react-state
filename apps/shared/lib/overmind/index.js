import { Overmind } from 'overmind';
import { state } from './state/state';
import * as actions from './state/actions';
export const config = { state, actions };
export const overmind = new Overmind(config, {
    devtools: true // 'localhost:3031'
});
