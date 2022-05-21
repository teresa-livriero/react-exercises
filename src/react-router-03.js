import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import { Welcome } from './function-components-01'
import { GithubUser } from './useEffect-03'
import { ClickCounter } from './useState-01'

export function ShowGithubUser() {
	const { username } = useParams()
	return <GithubUser username={username} />
}

export function App() {
	return (
		<Routes>
			<Route path="/" element={<Welcome name="Jimmy" />} />
            <Route path="/counter" element={<ClickCounter />} />
            <Route path="/users/:username" element={<ShowGithubUser />} />
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