import React from "react"

class HornedBeast extends React.Component{
    render(){
        return(
            <>
                <h2>{this.props.title}</h2>
                <img src={this.props.img_Url} alt={this.props.title}/>
                <p>{this.props.description}</p>
            </>
        )
    }
}

export default HornedBeast;