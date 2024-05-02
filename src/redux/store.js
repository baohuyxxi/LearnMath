import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    whiteList: [''],
    blacklist: [''],
    storage
};
const rootReducer = combineReducers({
    // user: userSlice.reducer,
    // booking: bookingSlice.reducer,
    // settingowner: setupOwnerSlice.reducer,
    // notification: notificationSlice.reducer,
    // global: globalSlice.reducer,
    // settingaccom: settingAccomSlice.reducer,
    // filterAccom: filterAcomSlice.reducer,
    // createAccom: createAccomSlice.reducer
});



const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

export let persistor = persistStore(store);
