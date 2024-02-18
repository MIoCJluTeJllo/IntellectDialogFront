export const saveState = (state) => {
	console.log(state, 'state')
	try {
		const serializedState = JSON.stringify(state)
		localStorage.setItem('state', serializedState)
	} catch (err) {
		throw new Error(err)
	}
}

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state')
		if (serializedState === null) {
			return undefined
		}
		return JSON.parse(serializedState)
	} catch (err) {
		throw new Error(err)
	}
}
