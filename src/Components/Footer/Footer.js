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

