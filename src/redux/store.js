//import { combineReducers } from 'redux';
import {  configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'
import contactsReduser from './contacts/contacts-reducer'
import {
    persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const contactspersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

// const rootReducer = combineReducers({
//       contacts: persistReducer(persistConfig, contactsReduser) 
//     })

// const persistedReducer = persistReducer(persistConfig, rootReducer )

// const rootReducer = combineReducers({
//     contacts: contactsReduser,
// });

//console.log(getDefaultMiddleware())

const middleware = [...getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }
}),
    logger,
]

// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
    reducer: {
      contacts: persistReducer(contactspersistConfig, contactsReduser) 
    },
    middleware,
})

const persistor = persistStore(store);

export default { store, persistor };