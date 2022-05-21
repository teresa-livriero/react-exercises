import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Welcome } from './function-components-01'
import { ClickCounter } from './useState-01'

export function App() {
	return (
		<Routes>
			<Route path="/" element={<Welcome name="Jimmy" />} />
            <Route path="/counter" element={<ClickCounter />} />
		</Routes>
	)
}

export function Container() {
    return (
        <Router>
            <App />
        </Router>
    )
}