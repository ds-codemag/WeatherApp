const initialState = {
  loading: false,
  error: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_PROCESSING':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'CREATE_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null
      };
    case 'CREATE_USER_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case 'EDIT_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null
      };
    case 'EDIT_USER_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case 'DELETE_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null
      };
    case 'DELETE_USER_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
