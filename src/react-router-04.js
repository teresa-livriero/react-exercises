import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom'
import { Welcome } from './function-components-01'
import { GithubUser } from './useEffect-03'
import { ClickCounter } from './useState-01'

export function ShowGithubUser() {
	const { username } = useParams()
	return <GithubUser username={username} />
}

export function App() {
	return (
        <>
		<Routes>
			<Route exact path='/' element={<Welcome name="Jimmy" />} />
            <Route exact path='/counter' element={<ClickCounter />} />
            <Route exact path='/users/:username' element={<ShowGithubUser />} />
		</Routes>
        <Link to="/"><p>Home</p></Link>
        <Link to="/counter"><p>Counter</p></Link>
        <Link to="/users/mariorossi"><p>Mario Rossi</p></Link>
        </>
	)
}

export function Container() {
    return (
        <Router>
            <App />
        </Router>
    )
}