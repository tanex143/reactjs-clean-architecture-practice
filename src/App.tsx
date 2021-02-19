import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import items from "./app/redux/Item/Item.reducers"
import todos from "./app/redux/Todo/Todo.reducers"
import RouteManager from "./app/RouteManager"

// to enable redux devtools extension
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Setup Redux store with Thunks
const rootReducers = combineReducers({ items, todos })
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof rootReducers>

const App = () => {
    return (
        <Provider store={store}>
            <RouteManager />
        </Provider>
    )
}

export default App
