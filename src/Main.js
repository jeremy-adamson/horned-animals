import React from "react";
import HornedBeast from "./HornedBeast";
import HornedBeastInfo from "./data.json"

class Main extends React.Component{
    render(){
        return(
            <main>
                {HornedBeastInfo.map(animal => <HornedBeast
                    title={animal.title}
                    img_Url={animal.image_url}
                    description={animal.description}
                    />)}
            </main>            
        );
    }
}

export default Main;