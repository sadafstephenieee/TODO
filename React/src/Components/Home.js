import React from "react"
import Master from "../Layout/Master"

class Home extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }

    
    
    render() {
        return(
            <div>
                <Master />
                <img src="https://www.educatorspegs.com//website/images/b2-1.jpg" alt="Girl in a jacket" width="100%" height="100%"></img>
                <h1>I LOVE THE EDUCATOR</h1>
            </div>
        )
    }
}
export default Home;