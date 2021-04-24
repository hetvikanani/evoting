import React from "react";
import mygif from '../../Image/eVoting.gif'

import "./spinner.css";

const Spinner = () => {



    return (
        <div className="newLoader">

            <img src={mygif}></img>


        </div>
    );
};

export default Spinner;
