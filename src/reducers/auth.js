export default (state = {}, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          ...action.payload.user,
          inProgress: false,
          errors: action.error ? action.payload.errors : null
        };
      case "REGISTER":
        return {
          ...state,
          inProgress: false,
          errors: action.error ? action.payload.errors : null
        };
  
      case "ASYNC_START":
        if (action.subtype === "LOGIN" || action.subtype === "REGISTER") {
          return { ...state, inProgess: true };
        }
        return state;
      default:
        return state;
    }
  };