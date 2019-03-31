function combineReducers(reducers) {
  const finalReducers = pick(reducers, val => typeof val === 'function');
  let sanityError;

  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  const defaultState = mapValues(finalReducers, () => undefined);

  return function combination(state, action) {
    if (state === undefined) state = defaultState;

    if (sanityError) {
      throw sanityError;
    }

    let hasChanged = false;
    const finalState = mapValues(finalReducers, (reducer, key) => {
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        const errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
      return nextStateForKey;
    });

    if ('development' !== 'production') {
      const warningMessage = getUnexpectedStateKeyWarningMessage(
        state,
        finalState,
        action,
      );
      if (warningMessage) {
        console.error(warningMessage);
      }
    }

    return hasChanged ? finalState : state;
  };
}

export { combineReducers };
