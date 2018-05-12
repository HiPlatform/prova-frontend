import { T, cond, propEq } from 'ramda';

const reducer = state => cond([
  [T, () => state],
]);

export default (state = { label: 'Hello, World!' }, action) => reducer(state)(action);
