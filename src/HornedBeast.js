import React from "react";
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import './HornedBeast.css';


class HornedBeast extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            favoriteTracker: 0
        };
    }

    handleClick = () => {
        this.setState({
            favoriteTracker: this.state.favoriteTracker + 1
        })
    };

    fillAndShowModal = () =>{
        this.props.handleShowModal(this.props.title, this.props.img_Url, this.props.description);
    }

    render(){
        return(
            <div className = "aniCard">
            <Card style={{ width: '18rem' }} onClick={this.fillAndShowModal}>
                <Card.Title as="h2">{this.props.title}</Card.Title>
                <Card.Img src={this.props.img_Url}
                    alt={this.props.title}
                    onClick={this.handleClick}/>
                <Card.Text>{this.props.description}</Card.Text>                

                {this.state.favoriteTracker ? <p>Favorited by: {this.state.favoriteTracker} 🦄</p>:<p>Favorited by none &#x1F922;</p>  }
            </Card>
            </div>
        );
    }
}

export default HornedBeast;