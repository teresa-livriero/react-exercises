import { useState } from 'react'

export function useGithubUser() {
	const [data, setData] = useState([])
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)

	function fetchGithubUser(username) {
        setLoading(true)
		return fetch(`https://api.github.com/users/${username}`)
          .then((response) => response.json())
          .then((data) => setData(data))
          .catch((error) => setError(error))
          .finally(() => setLoading(false));
	}

	return {
        data,
        error,
        loading,
        getUser: fetchGithubUser
    }
}