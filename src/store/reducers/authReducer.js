const initialState = {
  loading: false,
  error: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PROCESSING':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};
