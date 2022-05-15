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

    handleReset = () => {
		this.setState({
			todos: [],
		})
	}

    handleClick = (element) => {
		this.setState((state) => {
			return {
				todos: state.todos.filter((todo, index) => index !== element),
			}
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit} onReset={this.handleReset}>
					<input name="todo" />
					<button type="submit">Submit</button> 
                    <button type="reset">Reset</button>  
				</form>      

				<ul>
					{this.state.todos.map((todo, index) => (
						<li key={index}>{todo} <button onClick={() => this.handleClick(index)}>X</button></li>
					))}
				</ul>
			</div>
		)
	}
}