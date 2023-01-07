import React from "react";
import HornedBeast from "./HornedBeast";
import HornedBeastArr from "./HornedBeastArr";

class Main extends React.Component{
    render(){
        return(
            <>
                <HornedBeast title={"Unicorn"} img_Url={"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L2pvYjY4Ni0yNzYtdi5qcGc.jpg?s=YyMC35aWX0Jef1laVU2Fq8RuxaTL1QiBNezfeKfGXEA"} description={"Horse with a horn."}/>
                <HornedBeast title={"Narwhal"} img_Url={"https://live.staticflickr.com/4132/4969652999_5464de8711_b.jpg"} description={"Fish with a horn."}/>
            </>
        )
    }
}

export default Main;