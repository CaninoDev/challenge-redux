import React from 'react';
import { connect } from 'react-redux';
import { fetchDirectory } from '../../actions/directory';
import Student from './Student';

class Directory extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      directory: this.props.data
    };
  }
  componentDidMount () {
    this.props.fetchDirectory();
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      directory: nextProps.data
    })
  }

  render() {
    const {directory} = this.state;

    return (
       <div className="container-fluid">
         <div className="panel">
           <div className="panel-heading">
             <h3 className="panel-title">Student Directory</h3>
           </div>
           <div className="panel-body">
             <div className="table-responsive">
               <form className="form-inline">
                 <table className="table table-hover table-condensed">
                   <thead>
                   <tr>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>eMail</th>
                     <th>Age</th>
                     <th>Grade</th>
                   </tr>
                   </thead>
                   <tbody>
                   {directory && directory.map(student => <Student key={student._id} data={student} />)}
                   <tr>
                     <td>
                       <div className="form-group">
                         <label className="sr-only" htmlFor="firstname">First Name</label>
                         <input type="text" className="form-control" id="firstname" placeholder="First Name"/>
                       </div>
                     </td>
                     <td>
                       <div className="form-group">
                         <label className="sr-only" htmlFor="lastname">Last Name</label>
                         <input type="text" className="form-control" id="lastname" placeholder="Surname"/>
                       </div>
                     </td>
                     <td>
                       <div className="form-group">
                         <label className="sr-only" htmlFor="email">test@test.com</label>
                         <input type="text" className="form-control" id="email" placeholder="eMail Address"/>
                       </div>
                     </td>
                     <td>
                       <div className="form-group">
                         <label className="sr-only" htmlFor="age">Age</label>
                         <input type="text" className="form-control" id="age" placeholder="Age"/>
                       </div>
                     </td>
                     <td>
                       <div className="form-group">
                         <label className="sr-only" htmlFor="grade">Grade</label>
                         <input type="text" className="form-control" id="grade" placeholder="Grade"/>
                       </div>
                     </td>
                     <td colSpan="2">
                       <button type="submit" className="btn btn-info btn-xs">N</button>
                     </td>
                   </tr>
                   </tbody>
                 </table>
               </form>
             </div>
           </div>
         </div>
       </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDirectory: () => dispatch(fetchDirectory())
  };
};

const mapStateToProps = state => ({
  data: state.directory.data
});

export default connect(mapStateToProps, mapDispatchToProps)(Directory);