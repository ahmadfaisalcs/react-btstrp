import React, { Component } from 'react';
// import { Row } from 'react-bootstrap';
import Staff from './Staff';
// import PropTypes from 'prop-types';

export class DaftarStaff extends Component {
  render() {
    return this.props.staff.map((staf) => (
      <Staff 
        key={staf.id} 
        staf={staf}
        deleteStaff={this.props.deleteStaff}
      >
      </Staff>  
    ));
  }
}

// DaftarStaff.propTypes = {
//   DaftarStaff: PropTypes.array.isRequired
// }

export default DaftarStaff
