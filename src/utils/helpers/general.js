export const parseDateString = (dateString) => {
	if (typeof dateString !== 'string' || !dateString) {
		return null
	}

	const [datePart, timePart] = dateString.split('T')
	const date = datePart.split('-').join('/')
	const time = timePart.substring(0, 8)
	return `${date} ${time}`
}

export const getUserById = (state, id) => {
	return state.user.users?.find((user) => user?.id === id)
}
