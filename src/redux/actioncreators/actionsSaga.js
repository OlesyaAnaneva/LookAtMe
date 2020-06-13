import actionType from '../actions';

// Это тригерит саму сагу.

export function loadSaga() {
  return { type: actionType.saga };
}

// Эти сага вызывает с помощью put() в тех или иных случаях.
export function loadingStart() {
  return { type: actionType.start };
}

export function loadingTodo(arr) {
  return { type: actionType.todo, todo: arr };
}

export function dressForNewLook(property, value) {
  return { type: actionType.dressForNewLook, property, value};
}

export function getUserTest(user) {
  return { type: actionType.dressForNewLook, user};
}

export function getUserTestSaga() {
  return { type: actionType.getUserTestSaga};
}