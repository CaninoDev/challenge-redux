import React from 'react';

const Student = props => {
  const { data } = props;
  const { firstname, lastname, email, age, grade } = data;
  return (
     <tr>
       <td>{firstname}</td>
       <td>{lastname}</td>
       <td>{email}</td>
       <td>{age}</td>
       <td>{grade}</td>
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
