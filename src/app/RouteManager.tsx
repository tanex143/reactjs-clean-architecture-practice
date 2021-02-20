import React from "react"
import { Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom"
import ItemList from "./pages/item/ItemList"
import TodoList from "./pages/todo/TodoList"

const RouteManager = () => {
    return (
        <Router>
            <Switch>
                {/* <Route path="/" exact component={ItemList} /> */}
                <Route path="/todo" exact component={TodoList} />
                <Redirect from="*" to="/todo" />
            </Switch>
        </Router>
    )
}

export default RouteManager
