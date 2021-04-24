import React, { Component } from 'react'

class Footer extends Component {
    render() {
        console.log("hu footer nu render")

        return (
            <div className='footer'>
                Proex@ {new Date().getFullYear()}
            </div>
        )
    }
}
export default Footer;

// hve ? ha jo hve che ne

// mare first time koy aave ne tyare bhi 2 sec nu loading btavu che atyare su thay 

// direct aavi jaay che jo ha to evu krvu che koy first time aave to 2 sec loader fre ha to kv 1 miin