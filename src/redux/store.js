
import { createStore, combineReducers } from "redux";
import { tasksReducer, filterReducer } from "./reducers";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer);

export default store;