import { cardReducer, initCards } from "./reducers/cardReducer";
import { filterReducer } from "./reducers/filterReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

// Juntar ambos reducers al crear la store
const rootReducer = combineReducers({
    cards: cardReducer, 
    filter: filterReducer //Reducer que filtra por tipo
})

export const store = configureStore({reducer: rootReducer}, composeWithDevTools())
