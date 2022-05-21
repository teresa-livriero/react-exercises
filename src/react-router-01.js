import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Welcome } from './function-components-01'

export function App() {
	return (
		<Routes>
			<Route path="/" element={<Welcome name="Jimmy" />} />
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