import React, { useState } from 'react'
import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Label } from 'reactstrap';

function AddEmploye(props) {
  const [employee, setEmployee] = useState({
    fullName: "",
    age: 0,
    address: ""
  });
  // const [positions, setPositions] = useState([])
  const { fullName, age, address } = employee;

  const onInputChange = e => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const baseUrl = "https://localhost:7012";

  //   useEffect(() => {
  //   axios.get(`${baseUrl}api/Position/GetAll`).then((response) => {
  //     setPositions(response.data)
  //   })
  // }, [])

  const onSubmit = () => {
    axios.post(`${baseUrl}/api/employee/create`, employee).then(function(){
      props.hide()
    })
  }
  return (
    <div>
      <Modal isOpen={props.open} >
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          <Form >
            <FormGroup>
              <Input id="text" placeholder="Fullname" type="text" name='fullName' value={fullName} required onChange={(e) => onInputChange(e)} />
            </FormGroup>
            <FormGroup>
              <Input id="text" placeholder="Age" type="number" name='age' required value={age} onChange={(e) => onInputChange(e)} />
            </FormGroup>
            <FormGroup>
              <Input id="text" placeholder="Address" type="text" name='address' required value={address} onChange={(e) => onInputChange(e)} />
            </FormGroup>
            {/* <FormGroup>
              <Label>Position names</Label>
              <Input id="text" type="select" value={positions.map(function (item, i) { return <option key={i}>{item.name}</option> })} name='positionids' required />
            </FormGroup> */}
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button type='submit' color="primary" onClick={() => onSubmit()}>
            Sumbit
          </Button>
          <Button onClick={props.hide} color="secondary">
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  )
}

export default AddEmploye