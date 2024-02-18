export const wsMiddleware = (store) => (next) => (action) => {
	switch (action.type) {
		case 'WS_CONNECT':
			break
		case 'WS_DISCONNECT':
			break
		case 'WS_SEND_MESSAGE':
			break
		default:
			return next(action)
	}
}
