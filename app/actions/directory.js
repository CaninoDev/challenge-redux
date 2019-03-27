import fetch from 'cross-fetch';

export function fetchDirectory() {
  return function (dispatch) {
    dispatch({
      type: 'CLEAR_MESSAGES'
    });

    return fetch(`/students`)
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

export function postStudent(student) {

  return function (dispatch) {
    dispatch({
      type: 'CLEAR_MESSAGES'
    });

    fetch('/students', {
      method: 'POST',
      body: JSON.stringify(student),
      headers: {
        'Content-Type': 'application/json'
      }
    })
       .then(response => {
         if (response.status >= 400) {
           dispatch({
             type: 'POST_STUDENT_FAILURE',
             messages: 'There was an error. Please try again.'
           });
         } else {
           return response.json();
         }
       })
       .then(data => {
         dispatch({
           type: 'POST_STUDENT_SUCCESS',
           data: data.directory
         })
       })
  }
}