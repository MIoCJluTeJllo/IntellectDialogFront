export const ADD_USER = 'ADD_USER'
export const DELETE_USER = 'DELETE_USER'
export const EDIT_USER = 'EDIT_USER'

export const addUser = (data) => ({
	type: ADD_USER,
	payload: data,
})

export const deleteUser = (id) => ({
	type: DELETE_USER,
	payload: id,
})

export const editUser = (id, newData) => ({
	type: EDIT_USER,
	payload: { id, newData },
})
