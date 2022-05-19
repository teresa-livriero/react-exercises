import { useEffect, useState } from 'react'

export function useGithubUser(username) {
	const [data, setData] = useState([])

	useEffect(() => {
		return fetch(`https://api.github.com/users/${username}`)
          .then((response) => response.json())
          .then((data) => setData(data));
	}, [username])

	return {
        login: data.login,
        url: data.url
    }
}