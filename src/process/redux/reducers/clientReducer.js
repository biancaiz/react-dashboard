const initialState = {};

export default function(state=initialState, action) {
  switch (action.type) {
    case 'SET_CLIENTS': {
      return {
        ...state,
        clients: action.payload
      }
    }
    case 'CREATE_CLIENT': {
      return {
        ...action.payload
      }
    }
    default:
      return state;
  }
}
