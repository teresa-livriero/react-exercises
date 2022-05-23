import { combineReducers, createStore } from 'redux'

const INCREMENT = 'COUNTER@INCREMENT'
const DECREMENT = 'COUNTER@DECREMENT'
const RESET = 'COUNTER@RESET'

export function incrementCounter(increment = 1) {
	return {
		type: INCREMENT,
		payload: increment,
	}
}

export function decrementCounter(decrement = 1) {
	return {
		type: DECREMENT,
		payload: decrement,
	}
}

export function resetCounter() {
	return {
		type: RESET,
	}
}

export function counterReducer(state = 0, action) {
	switch (action.type) {
		case INCREMENT:
			return state + action.payload
		case DECREMENT:
			return state - action.payload
		case RESET:
			return 0
		default:
			return state
	}
}

const ADD = 'TODO@ADD'
const REMOVE = 'TODO@REMOVE'
const EDIT = 'TODO@EDIT'

export function addTodo(todo) {
	return {
		type: ADD,
		payload: todo,
	}
}

export function removeTodo(id) {
	return {
		type: REMOVE,
		payload: id,
	}
}

export function editTodo(id, data) {
	return {
		type: EDIT,
		payload: { id, data },
	}
}

export function todosReducer(state = [], action) {
	switch (action.type) {
		case ADD:
			return [...state, action.payload]
		case REMOVE:
			return state.filter((todo) => todo.id !== action.payload)
		case EDIT:
			return state.map((todo) => {
				if (todo.id === action.payload.id) {
					return { ...todo, ...action.payload.data }
				}
				return todo
			})
		default:
			return state
	}
}

const rootReducer = combineReducers({
	todos: todosReducer,
	counter: counterReducer,
})

export const store = createStore(rootReducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCounter(5))
store.dispatch(addTodo({ id: 1, title: 'Learn React.js', completed: false }))
store.dispatch(decrementCounter(2))
store.dispatch(editTodo(1, { completed: true }))
store.dispatch(removeTodo(1))
store.dispatch(resetCounter())