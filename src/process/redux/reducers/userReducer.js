const initialState = {};

export default function(state=initialState, action) {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...action.payload
      }
    }
    case 'SET_USERS': {
      return {
        ...state,
        users: action.payload
      }
    }
    default:
      return state;
  }
}
