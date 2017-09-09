export default function reducer(state={
    todolist : [ 'work1', 'work2', 'work3' ]
  }, action) {
    switch (action.type) {
      case 'LOGIN_USER_SUCCESS': {
        return {
          ...state,
          todolist : action.payload.todolist
        }
      }
      case 'LOGOUT_USER_SUCCESS': {
        return {
          ...state,
          todolist : {}
        }
      }
      case 'DELETE_TODO_ITEM' : {
  			const { todolist } = state ;
  			const temp = todolist.slice(0,action.payload).concat(todolist.slice(action.payload+1));   
  			return {
  				...state,
  				todolist : temp,
  			}  	
      }
      case 'ADD_TODO_ITEM'  : {
        let temp = [ ...state.todolist, action.payload ];
        return {
          ...state,
          todolist     : temp,
        }    
      }
      case 'EDIT_TODO_ITEM' : {
        const { todolist } = state ;
        const temp = todolist.slice(0,action.payload.index).concat(action.payload.content).concat(todolist.slice(action.payload.index+1));   
        return {
          ...state,
          todolist  : temp,
        }
      }
    }
    return state
}
