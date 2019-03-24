import React from 'react';
import { connect } from 'react-redux';
import { fetchDirectory } from '../../actions/directory';

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
        {directory !== undefined && directory.map(student => <div key={student._id} />)}
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