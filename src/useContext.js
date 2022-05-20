import { createContext, useContext } from 'react'

export const LanguageContext = createContext('en')

export function DisplayLanguage() {
	const language = useContext(LanguageContext)
	return <h1>{language}</h1>
}