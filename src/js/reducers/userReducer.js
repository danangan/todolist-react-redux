export default function reducer(state={
    username : "",
  }, action) {
    switch (action.type) {
      case 'LOGIN_USER_SUCCESS': {
        return {
          ...state,
          username : action.payload.username,
        }
      }
      case 'LOGOUT_USER_SUCCESS': {
        return {
          ...state,
          username : "",
        }
      }
    }
    return state
}
