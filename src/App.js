import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Modal from "react-bootstrap/Modal"
import HornedBeastInfo from "./data.json"
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      img_Url: "",
      description: "",
      showModal: false
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

  render(){
    return(
      <>
        <Header />
        <Main 
          hornedBeastInfo = {HornedBeastInfo}
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
