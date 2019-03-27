import React from 'react';

const Student = props => {
  const { data } = props;
  const { firstName, lastName, email, age, grade } = data;
  return (
     <tr>
       <td>{ firstName }</td>
       <td>{ lastName }</td>
       <td>{ email }</td>
       <td>{ age }</td>
       <td>{ grade }</td>
       <td>
         <button type="button" className="btn btn-warning btn-xs">E</button>
       </td>
       <td>
         <button type="button" className="btn btn-danger btn-xs">D</button>
       </td>
     </tr>
  )
};

export default Student;
