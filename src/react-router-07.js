import { BrowserRouter as Router, Route, Routes, useParams, Link } from 'react-router-dom'
import { Welcome } from './function-components-01'
import { GithubUser } from './useEffect-03'
import { GithubUserList } from './useEffect-04'
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
            <Route path="/users" element={<GithubUserList />}>
				<Route path=":username" element={<ShowGithubUser />} />
                <Route index element={<div>Add a user and select it</div>} />
			</Route>
            <Route path="*" element={<h1>Not Found</h1>} />
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