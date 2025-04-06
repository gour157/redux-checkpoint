
import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, FILTER_TASKS } from "./actions";

const initialState = {
  tasks: [],
  filter: "all", // all, done, not-done
};

export const tasksReducer = (state = initialState.tasks, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, isDone: !task.isDone }
          : task
      );
    case EDIT_TASK:
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, description: action.payload.newDescription }
          : task
      );
    default:
      return state;
  }
};

export const filterReducer = (state = initialState.filter, action) => {
  switch (action.type) {
    case FILTER_TASKS:
      return action.payload;
    default:
      return state;
  }
};