import React, { createContext } from 'react'

export const LanguageContext = createContext('en')

export class DisplayLanguage extends React.Component {
	render() {
		return (
			<LanguageContext.Consumer>
				{(language) => <h1>{language}</h1>}
			</LanguageContext.Consumer>
		)
	}
}

export class App extends React.Component {
	state = {
		language: 'en',
	}

	handleChange = (event) => {
		this.setState({
			language: event.target.value,
		})
	}

	render() {
		return (
			<div>
				<select name="language" value={this.state.language} onChange={this.handleChange}>
					<option value="en">ENGLISH</option>
					<option value="it">ITALIANO</option>
				</select>
				<LanguageContext.Provider value={this.state.language}>
					<DisplayLanguage />
				</LanguageContext.Provider>
			</div>
		)
	}
}