import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import contactsReduser from './contacts/contacts-reducer'

const rootReducer = combineReducers({
        contacts: contactsReduser,
    // filter: ''
 
})

// const reducer = (state = {}, action) => state;


const store = createStore(rootReducer, composeWithDevTools());

export default store;