

export const ADD_TASK = "ADD_TASK";
export const TOGGLE_TASK = "TOGGLE_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const FILTER_TASKS = "FILTER_TASKS";

export const addTask = (description) => ({
  type: ADD_TASK,
  payload: { description, id: Date.now(), isDone: false },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});

export const editTask = (id, newDescription) => ({
  type: EDIT_TASK,
  payload: { id, newDescription },
});

export const filterTasks = (filter) => ({
  type: FILTER_TASKS,
  payload: filter,
});
