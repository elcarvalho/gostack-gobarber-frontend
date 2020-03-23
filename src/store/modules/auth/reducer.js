import { produce } from 'immer';

const INITIAL_STATE = {};

const auth = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      default: {
        return state;
      }
    }
  });
};

export default auth;
