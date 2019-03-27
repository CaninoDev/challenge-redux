import React from 'react';

class StudentForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      eMail: null,
      age: null,
      grade: null
    }
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  render () {
    const { firstName, lastName, eMail, age, grade } = this.state;
    return (
       <tr>
         <td>
           <div className={`form-group has-feedback ${ firstName !== "" ? 'has-success' : 'has-failure' }`}>
             <label className="sr-only" htmlFor="firstName">First Name</label>
             <input type="text" className="form-control" id="firstName" placeholder="First Name" name="firstName" onChange={this.handleChange} value={firstName}/>
           </div>
         </td>
         <td>
           <div className={`form-group has-feedback ${ lastName !== "" ? 'has-success' : 'has-failure' }`}>
             <label className="sr-only" htmlFor="lastname">Last Name</label>
             <input type="text" className="form-control" id="lastName" placeholder="Surname" name="lastName" onChange={this.handleChange} value={lastName} required/>
           </div>
         </td>
         <td>
           <div className={`form-group has-feedback ${ eMail !== "" ? 'has-success' : 'has-failure' }`}>
             <label className="sr-only" htmlFor="email">test@test.com</label>
             <input type="text" className="form-control" id="email" placeholder="eMail Address" name="email" onChange={this.handleChange} value={email} required/>
           </div>
         </td>
         <td>
           <div className={`form-group has-feedback ${ age !== "" ? 'has-success' : 'has-failure' }`}>
             <label className="sr-only" htmlFor="age">Age</label>
             <input type="text" className="form-control" id="age" placeholder="Age" name="age" onChange={this.handleChange} value={age}/>
           </div>
         </td>
         <td>
           <div className={`form-group has-feedback ${ grade !== "" ? 'has-success' : 'has-failure' }`}>
             <label className="sr-only" htmlFor="grade">Grade</label>
             <input type="text" className="form-control" id="grade" placeholder="Grade" name="grade" onChange={this.handleChange} value={grade}/>
           </div>
         </td>
         <td colSpan="2">
           <input type="submit" value="New" className="btn btn-info btn-xs" form="newStudentForm"/>
         </td>
       </tr>
    )
  }
}

export default StudentForm;