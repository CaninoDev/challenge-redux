import React from 'react';
import { connect } from 'react-redux';
import { fetchDirectory } from '../../actions/directory';
import withStyles from 'isomorphic-style-loader/withStyles';

import ReactTable from 'react-table';
import * as reactTableCSS from "react-table/react-table.css";

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

    return (
       <div className="container">
        {directory !== undefined && directory.map(student => <ReactTable
           data={student}
           columns={[
              {
                Header: "Name",
                columns: [
                   {
                     Header: "First Name",
                     accessor: "firstname"
                   },
                  {
                    Header: "Last Name",
                    accessor: "lastname"
                  }]
              },
             {
               Header: "Info",
               columns: [
                  {
                    Header: "eMail",
                    accessor: "email"
                  },
                 {
                   Header: "Age",
                   accessor: "age"
                 },
                 {
                   Header: "Grade",
                   accessor: "grade"
                 }]
             }]
           }
           defaultPageSize={10} />)}
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

export default withStyles(reactTableCSS)(connect(mapStateToProps, mapDispatchToProps)(Directory));