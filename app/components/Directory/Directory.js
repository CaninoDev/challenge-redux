import React from 'react';
import { connect } from 'react-redux';
import { fetchDirectory } from '../../actions/directory';


const TableRow = props => {
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
        <button type="button" className="btn btn-xs">
          <span className="glyphicon glyphicon-pencil"></span>
        </button>
        <button type="button" className="btn btn-xs">
          <span className="glyphicon glyphicon-trash"></span>
        </button>
      </td>
    </tr>
  )
};

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
    const { directory } = this.state;

    const fleshOutRow = (obj) => {
      let webFragment = [];
      obj.map(function(obj) { return [...Object.values(obj) ] } ).forEach(function(row) {webFragment.push(<td>{row}</td>)});
      return [...webFragment];
    }

    return (
       <div className="container">
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
               {directory ? directory.map(student => <TableRow key={student._id} data={student}/>) : ""}
               </tbody>
               </table>
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