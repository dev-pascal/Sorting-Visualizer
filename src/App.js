import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BubbleSort from './algorithms/bubblesort'
import InsertionSort from './algorithms/insertionsort'
import SelectionSort from './algorithms/selectionsort'
import Algonav from './components/algonav'

export default function App() {
    return (
        <Router>
            <Algonav />
            <Switch>
                {/* Custom Routes */}
                <Route path="/BubbleSort">
                    <BubbleSort />
                </Route>
                <Route path="/SelectionSort">
                    <SelectionSort />
                </Route>
                <Route path="/InsertionSort">
                    <InsertionSort />
                </Route>
                {/* Default Route */}
                <Route path="/">
                    <BubbleSort />
                </Route>
            </Switch>
        </Router>
    )
}
