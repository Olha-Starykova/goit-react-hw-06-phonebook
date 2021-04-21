//import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import contactsReduser from './contacts/contacts-reducer'

// const rootReducer = combineReducers({
//     contacts: contactsReduser,
// });

//console.log(getDefaultMiddleware())

const middleware = [...getDefaultMiddleware(), logger]

// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
    reducer: {
      contacts:  contactsReduser,
    },
    middleware,
})

export default store;