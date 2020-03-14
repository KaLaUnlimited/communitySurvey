export default (state, action) => {
  switch (action.type) {
    case "NEXT_QUESTION":
      return {
        ...state,
        ...action.payload
      };
    case "PREVIOUS_QUESTION":
      return {
        ...state,
        ...action.payload
      };
    case "HEADER":
      return {
        ...state,
        ...action.payload
      };
    case "CLOSE_HEADER":
      return {
        ...state,
        ...action.payload
      };
    case "START_SURVEY":
      return {
        ...state,
        ...action.payload
      };
    case "SURVEY_COMPLETION":
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
