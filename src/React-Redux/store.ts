import {createStore, applyMiddleware} from 'redux'
import {rootReducer} from './Reducers/index';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './Saga/index';
//import { persistStore, PersistPartial } from "redux-persist";

//const sagaMiddleware = createSagaMiddleware()

//export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware),
    );
    sagaMiddleware.run(rootSaga);
    return store;
};

export default configureStore;

// export default () => {
//     return new Promise<{ store: Store<IRootReducerState & PersistPartial> }>(
//         res => {
//         persistStore(store, {}, () => {
//             res({ store } as { store: Store<IRootReducerState & PersistPartial> });
//             sagaMiddleware.run(rootSaga);
//         });
//         }
//     );
// };

