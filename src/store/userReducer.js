import { ADD_USER, DELETE_USER, EDIT_USER } from './actions'

const initialState = {
	users: [],
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				...state,
				users: [...state.users, action.payload],
			}
		case DELETE_USER:
			return {
				...state,
				users: state.users.filter((row) => row.id !== action.payload),
			}
		case EDIT_USER:
			return {
				...state,
				users: state.users.map((row) =>
					row.id === action.payload.id
						? { ...row, ...action.payload.newData }
						: row,
				),
			}
		default:
			return state
	}
}

export default userReducer
