export default function reducer(state={
    login_status : false,
  }, action) {
    switch (action.type) {
      case 'USER_LOGIN': {
        return {
          ...state,
          login_status  : true,
        }
      }
      case 'USER_LOGOUT': {
        return {
          ...state,
          login_status : false,
        }
      }
    }
    return state
}
