import React from 'react'

export class TodoList extends React.Component {
	state = {
		todos: [],
	}

	handleSubmit = (event) => {
		event.preventDefault()

		const todo = event.target.elements.todo.value
       
        event.target.elements.todo.value = ''

		this.setState((state) => {
			return {
				todos: [...state.todos, todo],
			}
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input name="todo" />
					<button type="submit">Submit</button>
				</form>

				<ul>
					{this.state.todos.map((todo, index) => (
						<li key={index}>{todo}</li>
					))}
				</ul>
			</div>
		)
	}
}