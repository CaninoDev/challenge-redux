import fetch from 'cross-fetch';

export function fetchDirectory() {
  return function(dispatch) {
    dispatch({
      type: 'CLEAR_MESSAGES'
    });

    return fetch(`/directory`)
       .then(
          response => response.json(),
          error => dispatch({
            type: 'FETCH_DIRECTORY_FAILURE',
            messages: Array.isArray(error.json()) ? error.json() : [error.json()]
          })
       )
       .then( data => dispatch({
         type: 'FETCH_DIRECTORY_SUCCESS',
         data: data.directory
       })
       )
  }
}
