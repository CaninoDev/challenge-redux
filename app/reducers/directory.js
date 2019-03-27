const initialState = {
  data: null,
  newStudent: {}
};

export default function directory (state = initialState, action) {
  switch(action.type) {
    case 'FETCH_DIRECTORY_SUCCESS':
      return Object.assign({}, state, {
        data: action.data
      });
    case 'POST_STUDENT_SUCCESS':
      return Object.assign({}, state, {
        data: action.data
      });
    default:
      return state;
  }
}