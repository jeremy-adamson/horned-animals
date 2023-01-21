import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Modal from "react-bootstrap/Modal"
import HornedBeastInfo from "./data.json"
import './App.css';
import { Form } from 'react-bootstrap';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      img_Url: "",
      description: "",
      showModal: false,
      HornedBeastInfo: HornedBeastInfo
    }
  }

  handleShowModal = (title, img_Url, description) => {
    this.setState({
      title: title,
      img_Url: img_Url,
      description: description,
      showModal: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  processHornFilter = (event) => {
    event.preventDefault();
    const hornNumber = event.target.value;
    let interimData;

    if (hornNumber === ""){
      interimData = HornedBeastInfo;
    }
    else{
      interimData = HornedBeastInfo.filter(beast => parseInt(beast.horns) === parseInt(hornNumber));
    }

    this.setState({
      HornedBeastInfo: interimData
    })
  }

  render(){
    return(
      <>
        <Header />
        <Form>
          <Form.Group>
            <Form.Select onChange={this.processHornFilter}>
              <option value={""}>All Horned Beasts</option>
              <option value={1}>One Horn</option>
              <option value={2}>Two Horns</option>
              <option value={3}>Three Horns</option>
              <option value={100}>One Hundred Horns</option>
            </Form.Select>
          </Form.Group>
        </Form>

        <Main 
          hornedBeastInfo = {this.state.HornedBeastInfo}
          handleShowModal = {this.handleShowModal}
        />
        <Footer />
        <Modal
          show = {this.state.showModal}
          onHide = {this.handleCloseModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src = {this.state.img_Url} alt = {this.state.title}/>
            <p>{this.state.description}</p>
          </Modal.Body>
          </Modal>
      </>
    )
  }
}

export default App;
