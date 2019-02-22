import React, { Component } from 'react';
import './App.css';
import { Jumbotron, Button, Modal, Form, Container, Row, Col, Alert} from 'react-bootstrap';
import DaftarStaff from './components/DaftarStaff';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      staff: [
        
      ],
      pegawai: {
        id: "",
        name: "",
        email: "",
        gender: "",
        posisi: ""
      }
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  deleteStaff = (id) => {
    this.setState({ staff: [...this.state.staff.filter(staf => staf.id !== id)] });
  }

  onSubmit = (e) => {
    let defaultValue = {
      id: "",
      name: "",
      email: "",
      gender: "",
      posisi: ""
    }
    this.setState({ staff: [...this.state.staff, this.state.pegawai] });
    this.setState({ pegawai:defaultValue });
  }

  onInputChange = (e) => {
    let peg = this.state.pegawai;
    peg[e.target.name] = e.target.value;
    console.log(peg)
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Jumbotron>
            <h1>Selamat Datang</h1>
            <p>
              Daftar Karyawan PT MajuBersama.
            <br></br>
              Untuk menambahkan karyawan, silahkan tekan tombol Tambah Karyawan di bawah
            </p>
            <p>
            <Button onClick={this.handleShow}>Tambah Karyawan</Button>
            </p>
          </Jumbotron>

          <Row>
            { this.state.staff.length === 0 ? 
            <Col>
              <Alert variant="warning">
                Tidak ada data
              </Alert>
            </Col> : 
            
            <DaftarStaff 
              staff={this.state.staff}
              deleteStaff={this.deleteStaff}
              >
            </DaftarStaff> }
            
          </Row>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Tambah Karyawan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formNomorPegawai">
                  <Form.Label>Nomor Pegawai</Form.Label>
                  <Form.Control name="id" type="text" placeholder="Nomor Pegawai" onChange={this.onInputChange}/>
                </Form.Group>

                <Form.Group controlId="formNamaLengkap">
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control name="name" type="text" placeholder="Nama Lengkap" onChange={this.onInputChange} />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control name="email" type="text" placeholder="Email" onChange={this.onInputChange} />
                </Form.Group>

                <Form.Group controlId="formPosisi">
                  <Form.Label>Posisi</Form.Label>
                  <Form.Control as="select" name="posisi" onChange={this.onInputChange}>
                    <option>Pilih</option>
                    <option value="Junior Programmer 1">Junior Programmer 1</option>
                    <option value="Junior Programmer 2">Junior Programmer 2</option>
                    <option value="Senior Programmer 1">Senior Programmer 1</option>
                    <option value="Senior Programmer 2">Senior Programmer 2</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formJenisKelamin">
                  <Form.Label>Jenis Kelamin</Form.Label>
                  <Form.Check name="gender" type="radio" id="1" label="Laki-Laki" value="Laki-Laki" onChange={this.onInputChange}>
                  </Form.Check>
                  <Form.Check name="gender" type="radio" id="2" label="Perempuan" value="Perempuan" onChange={this.onInputChange}>
                  </Form.Check>
                </Form.Group>

              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary" onClick={(event) => { this.handleClose(); this.onSubmit();}}>
                Tambah
              </Button>
              {/* <input type="submit" value="Asdf"/> */}
            </Modal.Footer>
          </Modal>
        </Container>
      </div>
    );
  }
}

export default App;
