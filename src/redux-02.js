import { createStore } from 'redux'

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

export const store = createStore(counterReducer)

store.dispatch(incrementCounter(5))

console.log(store.getState())