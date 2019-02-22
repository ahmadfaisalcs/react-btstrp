import React, { Component } from 'react'
import { Card, Col, Button } from 'react-bootstrap';
// import PropTypes from 'prop-types';

export class Staff extends Component {
  render() {
    const { id, name, email, gender, posisi} = this.props.staf;
    return (
      <Col xs={4}>
          <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={require('../img/user.png')} />
              <Card.Body>
                  <Card.Title>{ name }</Card.Title>
                  <Card.Text>
                  { id } <br/>
                  { email } <br/>
                  { posisi } <br/>
                  { gender }
                  </Card.Text>
                  <Button onClick={this.props.deleteStaff.bind(this, id)} variant="danger">Hapus</Button>
              </Card.Body>
          </Card>
          <br/>
      </Col>
    )
  }
}

//PropTypes
// Staff.propTypes = {
//     staf: PropTypes.object.isRequired
// }

export default Staff
