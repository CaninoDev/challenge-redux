import React from 'react';
import {connect} from 'react-redux';
import {fetchDirectory, postStudent} from '../../actions/directory';
import Student from './Student';
import StudentForm from './Form';

class Directory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directory: this.props.data,
    };
  }

  componentDidMount () {
    this.fetchDirectory();
  }

  render() {
    const { directory } = this.state;

    return (
       <div className="container-fluid">
         <div className="panel">
           <div className="panel-heading">
             <h3 className="panel-title">Student Directory</h3>
           </div>
           <div className="panel-body">
             <div className="table-responsive">
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
                 {directory && directory.map(student => <Student key={student._id} data={student}/>)}
                 </tbody>
               </table>
               <StudentForm />
             </div>
           </div>
         </div>
       </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchDirectory: () => dispatch(fetchDirectory()),
  };
};

const mapStateToProps = state => ({
  data: state.directory.data
});

export default connect(mapStateToProps, mapDispatchToProps)(Directory);