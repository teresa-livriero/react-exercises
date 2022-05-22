import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export function useGithubUser(username) {
	const { data, error } = useSWR(`https://api.github.com/users/${username}`, fetcher)

	return {
        login: data.login,
        url: data.url,
        error
    }
}