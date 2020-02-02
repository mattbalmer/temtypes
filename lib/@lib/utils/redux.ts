export function extendReducer(...reducers) {
  let reducerCount = reducers.length;
  let lastReducer = reducers[reducerCount - 1];
  let defaultState = typeof lastReducer === 'function' ? undefined : lastReducer;
  if(defaultState) {
    reducers = reducers.slice(0, reducerCount - 1);
  }
  return function(state, action) {
    state = state || defaultState;
    let newState = state;
    let i = 0;
    while(newState == state && i < reducerCount) {
      newState = reducers[i](state, action);
      i++;
    }
    return newState;
  };
}

export const REDUX_ACTIONS = {
  AUTO: 'AUTO',
};

export function actionTypes(prefix: string, map) {
  for(const key in map) {
    if (map.hasOwnProperty(key)) {
      map[key] = `${prefix}:${key}`;
    }
  }
  return map;
}