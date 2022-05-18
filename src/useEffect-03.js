import { useEffect, useState } from 'react'

export function GithubUser({ username }) {
	const [data, setData] = useState([])

	useEffect(() => {
		return fetch(`https://api.github.com/users/${username}`)
          .then((response) => response.json())
          .then((data) => setData(data));
	}, [username])

	return (
        <>
        <div>{data.login}</div>
        <div>{data.url}</div>
        </>
    )
}