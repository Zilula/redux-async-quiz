
import reducer from './Dog';
import { FETCH_DOG } from '../actions/Dog';

describe('Dog reducer tests', () => {
  it('handles an get dog action', () => {
    const state = {
      image: {}
    };

    const updatedState = reducer(state, {
      type: FETCH_DOG,
      payload: { hello: 'yes' }
    });

    expect(updatedState).toEqual({
      image: {
        hello: 'yes'
      }
    });
  });
});
