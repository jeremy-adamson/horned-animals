import React from "react";
import HornedBeast from "./HornedBeast";


class Main extends React.Component{
    render(){
        return(
            <main>
                {this.props.hornedBeastInfo.map(animal => <HornedBeast
                    title={animal.title}
                    img_Url={animal.image_url}
                    description={animal.description}
                    key={animal._id}
                    handleShowModal={this.props.handleShowModal}
                    />
                )}
            </main>            
        );
    }
}

export default Main;