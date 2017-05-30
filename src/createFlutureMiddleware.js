import { isFuture } from 'fluture'

console.log('isFuture', isFuture)

const getRejectHandler = dispatch => next => action =>
  error => error.type
    ? dispatch(error)
    : next(action)

// dispatch is a property of the middlewareApi exposed by Redux's applyMiddleware
export const createFlutureMiddleware = () => ({ dispatch }) => next => action =>
  isFuture(action)
    ? action.fork(getRejectHandler(dispatch)(next)(action), dispatch)
    : next(action)
