import React from 'react';
import { connect } from 'react-redux';
import { default as modalTypes } from 'Modals';

const MODAL_TYPES = {
  'newStudent': modalTypes.NewStudentModal,
  'editStudent': modalTypes.EditStudentModal,
  'deleteStudent': modalTypes.DeleteStudent
};

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
  };

  static getDerivedStateFromProps (nextProps, prevState) {
    if (nextProps.modalProps !== prevState.modalProps) {
      return ({ modalIsOpen: this.props.modalProps.open })
    }
  }

  componentDidUpdate( prevProps, prevState, snapshot ) {
    if (prevProps.modalProps !== this.props.modalProps) {
      this.setState({modalIsOpen: this.props.modalProps.open})
    }
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  };

  render () {
    if (!this.props.modalTypes) {
      return null
    }

    const SpecifiedModal = MODAL_TYPES[this.props.modalTypes]

    return (
       <div>
         <SpecifiedModal isOpen={this.state.modalIsOpen} closeModal={this.closeModal} {...this.props.modalProps} />
       </div>
    );
  }
};

const mapStateToProps = state => ({
  ...state.modals
});

export default connect(mapStateToProps)(Modal);

