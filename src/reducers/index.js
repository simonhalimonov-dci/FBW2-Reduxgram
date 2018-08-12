import { combineReducers } from "redux";

import comments from "./comments";
import posts from "./posts";

const rootReducer = combineReducers({ posts, comments });

export default rootReducer;
