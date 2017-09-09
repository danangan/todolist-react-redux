export default function reducer(state={
    login_status : false,
  }, action) {
    switch (action.type) {
      case 'LOGIN_USER_SUCCESS': {
        return {
          ...state,
          login_status  : true,
        }
      }
      case 'LOGOUT_USER_SUCCESS': {
        return {
          ...state,
          login_status : false,
        }
      }
    }
    return state
}
