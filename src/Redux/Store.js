import { createStore, applyMiddleware } from "redux";
import reducers from "./Reducers/index";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducers, composeWithDevTools(applyMiddleware()));
export default store;
